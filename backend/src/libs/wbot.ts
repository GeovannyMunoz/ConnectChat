import * as Sentry from "@sentry/node";
import makeWASocket, {
  WASocket,
  Browsers,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore,
  isJidBroadcast,
  CacheStore,
  jidNormalizedUser 
} from "@whiskeysockets/baileys";
import makeWALegacySocket from "@whiskeysockets/baileys";

import P from "pino";

import Whatsapp from "../models/Whatsapp";
import { logger } from "../utils/logger";
import MAIN_LOGGER from "@whiskeysockets/baileys/lib/Utils/logger";
import { useMultiFileAuthState } from "../helpers/useMultiFileAuthState";
import { Boom } from "@hapi/boom";
import AppError from "../errors/AppError";
import { getIO } from "./socket";
import { Store } from "./store";
import { StartWhatsAppSession } from "../services/WbotServices/StartWhatsAppSession";
import DeleteBaileysService from "../services/BaileysServices/DeleteBaileysService";
import NodeCache from 'node-cache';
import cacheLayer from "./cacheWbot";

const msgRetryCounterCache = new NodeCache({
  stdTTL: 600,
  maxKeys: 1000,
  checkperiod: 300,
  useClones: false
});

const loggerBaileys = MAIN_LOGGER.child({});
loggerBaileys.level = "error";

type Session = WASocket & {
  id?: number;
  store?: Store;
};

const sessions: Session[] = [];

const retriesQrCodeMap = new Map<number, number>();

export const getWbot = (whatsappId: number): Session => {
  const sessionIndex = sessions.findIndex(s => s.id === whatsappId);

  if (sessionIndex === -1) {
    throw new AppError("ERR_WAPP_NOT_INITIALIZED");
  }
  return sessions[sessionIndex];
};

export const removeWbot = async (
  whatsappId: number,
  isLogout = true
): Promise<void> => {
  try {
    const sessionIndex = sessions.findIndex(s => s.id === whatsappId);
    if (sessionIndex !== -1) {
      if (isLogout) {
        sessions[sessionIndex].logout();
        sessions[sessionIndex].ws.close();
      }

      sessions.splice(sessionIndex, 1);
    }
  } catch (err) {
    logger.error(err);
  }
};

export const initWASocket = async (whatsapp: Whatsapp): Promise<Session> => {
  return new Promise(async (resolve, reject) => {
    try {
      (async () => {
        const io = getIO();

        const whatsappUpdate = await Whatsapp.findOne({
          where: { id: whatsapp.id }
        });

        if (!whatsappUpdate) return;

        const { id, name, companyId } = whatsappUpdate;

        const { version, isLatest } = await fetchLatestBaileysVersion();

        logger.info(`using WA v${version.join(".")}, isLatest: ${isLatest}`);
        logger.info(`Starting session ${name}`);
        let retriesQrCode = 0;

        let wsocket: Session = null;
        const store = makeInMemoryStore({
          logger: loggerBaileys
        });

        const { state, saveCreds } = await useMultiFileAuthState(whatsapp);

        wsocket = makeWASocket({
          version: version,
          logger: loggerBaileys,
          printQRInTerminal: false,
          browser: ["WhatNet", "Desktop", "10.15.7"],
          auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, logger),
          },
          generateHighQualityLinkPreview: true,
          linkPreviewImageThumbnailWidth: 192,
          msgRetryCounterCache,
          shouldIgnoreJid: jid => isJidBroadcast(jid),
          /*shouldIgnoreJid: (jid) => {
            return isJidBroadcast(jid) || (!allowGroup && isJidGroup(jid)) //|| jid.includes('newsletter')
          },*/
          defaultQueryTimeoutMs: undefined,
          markOnlineOnConnect: false,
          retryRequestDelayMs: 500,
          maxMsgRetryCount: 5,
          emitOwnEvents: true,
          fireInitQueries: true,
          transactionOpts: { maxCommitRetries: 10, delayBetweenTriesMs: 3000 },
          connectTimeoutMs: 25000,
        });

        // Evento de conexión
        wsocket.ev.on("connection.update", async ({ connection, lastDisconnect, qr }) => {
          logger.info(`Socket ${name} Connection Update: ${connection} ${lastDisconnect?.error?.message || ""}`);

          if (connection === "close") {
            logger.warn(`DESCONECTADO: ${JSON.stringify(lastDisconnect, null, 2)}`);
            const statusCode = (lastDisconnect?.error as Boom)?.output?.statusCode;

            const handleDisconnect = async () => {
              await whatsapp.update({ status: "PENDING", session: "" });
              await DeleteBaileysService(whatsapp.id);
              await cacheLayer.delFromPattern(`sessions:${whatsapp.id}:*`);
              io.emit(`company-${whatsapp.companyId}-whatsappSession`, {
                action: "update",
                session: whatsapp,
              });
              removeWbot(id, false);
            };

            if (statusCode === 403 || statusCode === DisconnectReason.loggedOut) {
              await handleDisconnect();
              setTimeout(() => StartWhatsAppSession(whatsapp, whatsapp.companyId), 2000);
              return;
            }
      
            if (statusCode !== DisconnectReason.loggedOut) {
              removeWbot(id, false);
              setTimeout(() => StartWhatsAppSession(whatsapp, whatsapp.companyId), 2000);
            }

          }

          if (connection === "open") {
            await whatsapp.update({
              status: "CONNECTED",
              qrcode: "",
              retries: 0,
              number: jidNormalizedUser(wsocket.user.id).split("@")[0],
              perfilName: wsocket.user.name || ""
            });

            io.emit(`company-${whatsapp.companyId}-whatsappSession`, {
              action: "update",
              session: whatsapp
            });

            const sessionIndex = sessions.findIndex(s => s.id === whatsapp.id);
            if (sessionIndex === -1) {
              wsocket.id = whatsapp.id;
              sessions.push(wsocket);
            }

            resolve(wsocket);
          }

          if (qr !== undefined) {
            if (retriesQrCodeMap.get(id) && retriesQrCodeMap.get(id) >= 3) {
              await whatsappUpdate.update({
                status: "DISCONNECTED",
                qrcode: ""
              });
              await DeleteBaileysService(whatsappUpdate.id);
              await cacheLayer.delFromPattern(`sessions:${whatsapp.id}:*`);
              io.emit(`company-${whatsapp.companyId}-whatsappSession`, {
                action: "update",
                session: whatsappUpdate
              });
              wsocket.ev.removeAllListeners("connection.update");
              wsocket.ws.close();
              wsocket = null;
              retriesQrCodeMap.delete(id);
            } else {
              logger.info(`Session QRCode Generate ${name}`);
              retriesQrCodeMap.set(id, (retriesQrCode += 1));

              await whatsapp.update({
                qrcode: qr,
                status: "qrcode",
                retries: 0,
                number: "",
                perfilName: ""
              });

              const sessionIndex = sessions.findIndex(s => s.id === whatsapp.id);
              if (sessionIndex === -1) {
                wsocket.id = whatsapp.id;
                sessions.push(wsocket);
              }

              io.emit(`company-${whatsapp.companyId}-whatsappSession`, {
                action: "update",
                session: whatsapp
              });
            }
          }
        });

        // Bindeamos la store
        store.bind(wsocket.ev);

        // Guardamos los nuevos credentials
        wsocket.ev.on("creds.update", saveCreds);


      })();
    } catch (error) {
      Sentry.captureException(error);
      console.log("wbot:",error);
      reject(error);
    }
  });
};
