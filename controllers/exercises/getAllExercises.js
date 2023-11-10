const { ctrlWrapper } = require("../../helpers/index.js");
const { Exercise } = require("../../models/exercise.js");
const paginationParams = require("../../helpers/paginationParams.js");

const getAllExercises = async (req, res) => {
  const { page, limit } = req.query;
  const { skip, limit: normalizedLimit } = paginationParams(page, limit);
  const result = await Exercise.find().skip(skip).limit(normalizedLimit);
  res.json(result);
};

module.exports = ctrlWrapper(getAllExercises);
