const {
  ctrlWrapper,
  HttpError,
  paginationParams,
} = require("../../helpers");
const { Filter } = require("../../models/filter.js");

const getAllMuscles = async (req, res) => {
    const { page, limit } = req.query;
  const result = await Filter.find(
    { filter: "Muscles" },
    {},
    paginationParams(page, limit)
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getAllMuscles);
