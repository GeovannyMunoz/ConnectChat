import GetDefaultWhatsApp from "../../helpers/GetDefaultWhatsApp";
import { getWbot } from "../../libs/wbot";
import AppError from "../../errors/AppError";


interface IOnWhatsapp {
  jid: string;
  exists: boolean;
}

const checker = async (number: string, wbot: any) => {
  const [validNumber] = await wbot.onWhatsApp(`${number}@s.whatsapp.net`);
  return validNumber;
};

const CheckContactNumber = async (
  number: string,
  companyId: number
): Promise<IOnWhatsapp> => {
  const defaultWhatsapp = await GetDefaultWhatsApp(companyId);

  const wbot = getWbot(defaultWhatsapp.id);
  const isNumberExit = await checker(number, wbot);

  if (!isNumberExit || !isNumberExit.exists) {
    throw new AppError("ERR_CHECK_NUMBER", 400);
  }
  return isNumberExit;
};

export default CheckContactNumber;
