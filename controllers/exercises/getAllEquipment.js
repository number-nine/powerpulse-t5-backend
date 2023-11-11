const {
  ctrlWrapper,
  HttpError,
  paginationParams,
} = require("../../helpers/index.js");
const { Filter } = require("../../models/filter.js");

const getAllEquipment = async (req, res) => {
  const { page, limit } = req.query;
  const result = await Filter.find(
    { filter: "Equipment" },
    {},
    paginationParams(page, limit)
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getAllEquipment);
