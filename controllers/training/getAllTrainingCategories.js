const { ctrlWrapper } = require("../../helpers");
const { Training } = require("../../models/training.js");

const getAllTrainingCategories = async (req, res) => {
  const bodyParts = await Training.distinct("bodyPart");
  const muscles = await Training.distinct("target");
  const equipment = await Training.distinct("equipment");

  const result = {
    bodyParts,
    muscles,
    equipment,
  };

  res.json(result);
};

module.exports = ctrlWrapper(getAllTrainingCategories);
