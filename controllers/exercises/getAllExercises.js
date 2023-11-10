const { ctrlWrapper, HttpError } = require("../../helpers/index.js");
const { Exercise } = require("../../models/exercise.js");
const paginationParams = require("../../helpers/paginationParams.js");

const getAllExercises = async (req, res) => {
  const { page, limit } = req.query;
  const { skip, limit: normalizedLimit } = paginationParams(page, limit);
  const result = await Exercise.find().skip(skip).limit(normalizedLimit);
  if (!result) {
    throw HttpError(400, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getAllExercises);
