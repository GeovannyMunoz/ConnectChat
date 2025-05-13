import CampaignShipping from "../../models/CampaignShipping";
import * as XLSX from "xlsx";
import { Op, literal } from "sequelize";

export interface IReport {
  id: string;
}

export async function ReportService({ id }: IReport)
{
    try {
        const reports = await CampaignShipping.findAll({
            where: { 
                campaignId: id,
                deliveredAt: {
                    [Op.ne]: null
                } 
            },
            attributes: ["number", "message", "deliveredAt", "createdAt",
                [
                    literal(`
                      (
                        SELECT json_agg(sub_m)
                        FROM (
                          SELECT messages."body", messages."createdAt"
                          FROM "Messages" AS messages
                          JOIN "Contacts" AS contacts ON contacts.id = messages."contactId"
                          WHERE contacts.number = "CampaignShipping".number
                          AND messages."fromMe" = false
                          AND messages."createdAt" > "CampaignShipping"."deliveredAt"
                          ORDER BY messages."createdAt" DESC
                          LIMIT 10
                        ) AS sub_m
                      )
                    `),
                    "latestMessages"
                  ]
            ]
        });

        //const jsonData = reports.map(report => report.toJSON());
        const jsonData = reports.map(report => {
            const plain = report.toJSON() as any;
            if (Array.isArray(plain.latestMessages)) {
                plain.latestMessages = plain.latestMessages
                .reverse()
                .map(msg => `${msg.body} [${new Date(msg.createdAt).toLocaleString()}]`)
                .join(" || ");
            } else {
              plain.latestMessages = "";
            }
            return plain;
          });
          

        const worksheet = XLSX.utils.json_to_sheet(jsonData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });

        const filename = "report_campaign.xlsx";

        return { excelBuffer, filename };

    } catch (error) {
        console.error("Error al generar el archivo Excel:", error);
        throw new Error("Error al generar el archivo Excel");
    }

}
