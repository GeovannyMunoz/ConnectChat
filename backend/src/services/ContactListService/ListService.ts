import { Op, fn, col, where, literal } from "sequelize";
import ContactList from "../../models/ContactList";
import ContactListItem from "../../models/ContactListItem";
import { isEmpty } from "lodash";

interface Request {
  companyId: number | string;
  searchParam?: string;
  pageNumber?: string;
}

interface Response {
  records: ContactList[];
  count: number;
  hasMore: boolean;
}

const ListService = async ({
  searchParam = "",
  pageNumber = "1",
  companyId
}: Request): Promise<Response> => {
  let whereCondition: any = {
    companyId
  };

  if (!isEmpty(searchParam)) {
    whereCondition = {
      ...whereCondition,
      [Op.or]: [
        {
          name: where(
            fn("LOWER", col("ContactList.name")),
            "LIKE",
            `%${searchParam.toLowerCase().trim()}%`
          )
        }
      ]
    };
  }

  const limit = 20;
  const offset = limit * (+pageNumber - 1);

  const { count, rows: records } = await ContactList.findAndCountAll({
    where: whereCondition,
    limit,
    offset,
    order: [["name", "ASC"]],
    subQuery: false,
    include: [
      {
        model: ContactListItem,
        as: "contacts",
        attributes: [],
        required: false
      }
    ],
    attributes: [
      "id",
      "name",
      [fn("count", col("contacts.id")), "contactsCount"],
      [
        fn(
          "SUM",
          literal(`CASE WHEN "contacts"."isWhatsappValid" = true THEN 1 ELSE 0 END`)
        ),
        "whatsappValidCountTrue",
      ],
      [
        fn(
          "SUM",
          literal(`CASE WHEN "contacts"."isWhatsappValid" = false THEN 1 ELSE 0 END`)
        ),
        "whatsappValidCountFalse",
      ]
    ],
    group: ["ContactList.id"]
  });

  const hasMore = count > offset + records.length;

  return {
    records,
    count,
    hasMore
  };
};

export default ListService;
