import { head } from "lodash";
import XLSX from "xlsx";
import { has } from "lodash";
import ContactListItem from "../../models/ContactListItem";
import CheckContactNumber from "../WbotServices/CheckNumber";
import { logger } from "../../utils/logger";
// import CheckContactNumber from "../WbotServices/CheckNumber";

export async function ImportContacts(
  contactListId: number,
  companyId: number,
  file: Express.Multer.File | undefined
) {
  const workbook = XLSX.readFile(file?.path as string);
  const worksheet = head(Object.values(workbook.Sheets)) as any;
  const rows: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  const headers = rows[0].map((header: string) => header.toLowerCase());

  const contacts = rows.slice(1).map(row => {
    let name = "";
    let number = "";
    let email = "";
    let variables = "";


    const dynamicColumns: any[] = [];
    const nameHeader = headers.find(header => header.includes("nombre"));
    const numberHeader = headers.find(header => header.includes("numero"));
    const emailHeader = headers.find(header => header.includes("email"));

    if (nameHeader) name = row[headers.indexOf(nameHeader)];
    if (numberHeader) number = `${row[headers.indexOf(numberHeader)]}`.replace(/\D/g, "");
    if (emailHeader) email = row[headers.indexOf(emailHeader)];

    headers.forEach((header: string, index: number) => {
	    if (![nameHeader, numberHeader, emailHeader].includes(header)) {
		    dynamicColumns.push({
		      key: header,
		      value:row[index]
		    });
	    }
    });

    if(dynamicColumns.length > 0){
    	variables = JSON.stringify(dynamicColumns)
    }


    return { name, number, email, contactListId, companyId, variables };
  });

  const contactList: ContactListItem[] = [];

  for (const contact of contacts) {
    const [newContact, created] = await ContactListItem.findOrCreate({
      where: {
        number: `${contact.number}`,
        contactListId: contact.contactListId,
        companyId: contact.companyId
      },
      defaults: contact
    });
    if (created) {
      contactList.push(newContact);
    }
  }

  if (contactList) {
    for (let newContact of contactList) {
      try {
        const response = await CheckContactNumber(newContact.number, companyId);
        newContact.isWhatsappValid = response.exists;
        const number = response.jid.replace(/\D/g, "");
        newContact.number = number;
        await newContact.save();
      } catch (e) {
        logger.error(`Número de contato inválido: ${newContact.number}`);
      }
    }
  }

  return contactList;
}
