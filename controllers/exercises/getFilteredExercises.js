const { Exercise } = require("../../models/exercise");
const { ctrlWrapper, paginationParams } = require("../../helpers");

const getFilteredExercises = async (req, res) => {
  // const { _id: id } = req.user;
  const {
    filter,
    category,
    page,
    limit,
  } = req.query;

  let result = [];
  const findFilter = {};


  if (typeof filter !== "undefined" || typeof category !== "undefined") {
    findFilter[filter] = category;
  }

  result = await Exercise.find(
    findFilter,
    {},
    paginationParams(page, limit)
  )

  res.json(result);
};

module.exports = ctrlWrapper(getFilteredExercises);
