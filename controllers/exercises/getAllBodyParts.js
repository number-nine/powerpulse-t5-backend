const { ctrlWrapper, HttpError } = require("../../helpers/index.js");
const { Filter } = require("../../models/filter.js");

const getAllBodyParts = async (req, res) => {
  const result = await Filter.find({ filter: "Body parts" });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getAllBodyParts);
