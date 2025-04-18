import { Chat, Contact } from "@whiskeysockets/baileys";
import Baileys from "../../models/Baileys";

interface Request {
  whatsappId: number;
  contacts?: Contact[];
  chats?: Chat[];
}

const createOrUpdateBaileysService = async ({
  whatsappId,
  contacts,
  chats,
}: Request): Promise<Baileys> => {
  try {
    const baileysExists = await Baileys.findOne({
      where: { whatsappId }
    });

    if (baileysExists) {
      let getChats: Chat[] = baileysExists.chats
        ? JSON.parse(baileysExists.chats)
        : [];

      let getContacts: Contact[] = baileysExists.contacts
        ? JSON.parse(baileysExists.contacts)
        : [];

      if (Array.isArray(chats)) {
        getChats.push(...chats);
        getChats = getChats.filter(
          (v, i, a) => a.findIndex(v2 => v2.id === v.id) === i
        );
        getChats.sort((a, b) => a.id.localeCompare(b.id));
      }

      if (Array.isArray(contacts)) {
        getContacts.push(...contacts);
        getContacts = getContacts.filter(
          (v, i, a) => a.findIndex(v2 => v2.id === v.id) === i
        );
        getContacts.sort((a, b) => a.id.localeCompare(b.id));
      }

      // Prevención de JSON.stringify muy grande
      const stringifiedChats = JSON.stringify(getChats);
      const stringifiedContacts = JSON.stringify(getContacts);

      if (stringifiedChats.length > 10_000_000 || stringifiedContacts.length > 10_000_000) {
        throw new Error("Data too large to stringify.");
      }

      const updatedBaileys = await baileysExists.update({
        chats: stringifiedChats,
        contacts: stringifiedContacts
      });

      return updatedBaileys;
    }

    const newBaileys = await Baileys.create({
      whatsappId,
      contacts: JSON.stringify(contacts || []),
      chats: JSON.stringify(chats || [])
    });

    await new Promise(resolve => setTimeout(resolve, 1000));
    return newBaileys;

  } catch (error) {
    console.error("BaileysService Error:", error);
    throw new Error("Failed to create or update Baileys data");
  }
};

export default createOrUpdateBaileysService;
