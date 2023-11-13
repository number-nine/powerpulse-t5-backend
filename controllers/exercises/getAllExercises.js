const { ctrlWrapper, HttpError, paginationParams } = require("../../helpers");
const { Exercise } = require("../../models/exercise");

const getAllExercises = async (req, res) => {
  const { page, limit } = req.query;
  const result = await Exercise.find({}, paginationParams(page, limit));
  if (!result) {
    throw HttpError(400, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getAllExercises);
