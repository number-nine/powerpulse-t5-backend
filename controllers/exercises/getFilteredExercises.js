const { ctrlWrapper, paginationParams } = require("../../helpers");
const { Exercise } = require("../../models/exercise");

const endpoints = require("./endpoints");

const getFilteredExercises = async (req, res) => {
  const { filter, name, page, limit } = req.query;
  const findFilter = {};
  let result = [];
  let total = 0;

  const category = Object.keys(endpoints).find(
    (endpoint) => endpoints[endpoint].filter === filter
  );
  if (category) {
    findFilter[endpoints[category].field] = name;
  }

  result = await Exercise.find(findFilter, {}, paginationParams(page, limit));

  total = await Exercise.countDocuments(findFilter);

  res.json({ data: result, total });
};

module.exports = ctrlWrapper(getFilteredExercises);
