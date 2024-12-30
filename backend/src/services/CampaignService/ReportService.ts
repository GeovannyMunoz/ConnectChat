import CampaignShipping from "../../models/CampaignShipping";
import * as XLSX from "xlsx";
import { Op } from "sequelize";

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
            attributes: ["number", "message", "deliveredAt", "createdAt"]
        });

        const jsonData = reports.map(report => report.toJSON());


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
