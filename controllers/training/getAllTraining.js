const { ctrlWrapper } = require("../../helpers");
const { Training } = require("../../models/training.js");

const getAllTraining = async (req, res) => {
  const result = await Training.find();
  res.json(result);
};

module.exports = ctrlWrapper(getAllTraining);
