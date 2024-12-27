import ContactListItem from "../../models/ContactListItem"; // Asegúrate de que la ruta sea correcta
import * as XLSX from "xlsx";


export interface IExportContacts {
  type: string;
  contactListId: string;
}

export async function ExportContacts({ type, contactListId  }: IExportContacts)
{
    try {

        const isWhatsappValid = type === "valid" ? true : false;

        const contacts = await ContactListItem.findAll({
            where: { 
                isWhatsappValid,
                contactListId 
            },
            attributes: ["name", "number", "email", "variables", "isWhatsappValid"]
        });

        const jsonData = contacts.map(contact => contact.toJSON());


        const worksheet = XLSX.utils.json_to_sheet(jsonData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Contactos");

        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });

        const filename = isWhatsappValid ? "contactos_validos.xlsx" : "contactos_no_validos.xlsx";

        return { excelBuffer, filename };

    } catch (error) {
        console.error("Error al generar el archivo Excel:", error);
        throw new Error("Error al generar el archivo Excel");
    }

}
