const { ctrlWrapper, paginationParams, HttpError } = require("../../helpers");
const { Exercise } = require("../../models/exercise");

const endpoints = require("./endpoints");

const getFilteredExercises = async (req, res) => {
  const { filter, name, page, limit } = req.query;
  const findFilter = {};

  const category = Object.keys(endpoints).find(
    (endpoint) => endpoints[endpoint].filter === filter
  );

  if (!category) throw HttpError(404, "Category not found");

  findFilter[endpoints[category].field] = name;

  const result = await Exercise.find(
    findFilter,
    {},
    paginationParams(page, limit)
  );

  if (!result) throw HttpError(404, "Not found");

  res.json(result);
};

module.exports = ctrlWrapper(getFilteredExercises);
