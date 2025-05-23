import { Op } from "sequelize";
import AppError from "../errors/AppError";
import Ticket from "../models/Ticket";

const CheckContactOpenTickets = async (contactId: number, whatsappId?: string): Promise<Ticket | null> => {
  let ticket

  if (!whatsappId) {
    ticket = await Ticket.findOne({
      where: {
        contactId,
        status: { [Op.or]: ["open", "pending"] },

      }
    });
  } else {
    ticket = await Ticket.findOne({
      where: {
        contactId,
        status: { [Op.or]: ["open", "pending"] },
        whatsappId
      }
    });
  }

  //console.log("CheckContactOpenTickets:",ticket)
  /*if (ticket) {
    throw new AppError("ERR_OTHER_OPEN_TICKET");
  }*/

    return ticket;
};

export default CheckContactOpenTickets;
