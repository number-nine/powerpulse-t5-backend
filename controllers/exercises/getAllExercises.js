const { ctrlWrapper } = require("../../helpers/index.js");
const { Exercise } = require("../../models/exercise.js");

const getAllExercises = async (req, res) => {
  const result = await Exercise.find();
  res.json(result);
};

module.exports = ctrlWrapper(getAllExercises);
