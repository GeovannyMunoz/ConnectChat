import { Server as SocketIO } from "socket.io";
import { Server } from "http";
import AppError from "../errors/AppError";
import { logger } from "../utils/logger";
import User from "../models/User";
//import { instrument } from "@socket.io/admin-ui";

let io: SocketIO;

export const initIO = (httpServer: Server): SocketIO => {
  io = new SocketIO(httpServer, {
    cors: {
      origin: [process.env.FRONTEND_URL],
      //methods: ["GET", "POST"],
      credentials: true
    }
  });

  /*instrument(io, {
    auth: false, 
    mode: 'development' // 'production'
  });*/

  io.on("connection", async socket => {
    const userIdStr = socket.handshake.query.userId;
    const userId = parseInt(Array.isArray(userIdStr) ? userIdStr[0] : userIdStr, 10);

    logger.info("Client Connected: "+ userId + " - " + socket.id);

    if (userId && userId !== undefined && userId !== null) {
      const user = await User.findByPk(userId);
      if (user) {
        user.online = true;
        await user.save();
      }
    }
   
    socket.on("joinChatBox", (ticketId: string) => {
      logger.info("A client joined a ticket channel "+ ticketId);
      socket.join(ticketId);
    });

    socket.on("joinNotification", () => {
      logger.info("A client joined notification channel");
      socket.join("notification");
    });

    socket.on("joinTickets", (status: string) => {
      logger.info(`A client joined to ${status} tickets channel.`);
      socket.join(status);
    });

    socket.on("disconnect", () => {
      logger.info("Cliente desconectado: "+ socket.id);
    });

  });
  return io;
};

export const getIO = (): SocketIO => {
  if (!io) {
    throw new AppError("Socket IO not initialized");
  }
  return io;
};
