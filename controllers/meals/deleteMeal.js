const { Meal } = require("../../models/meal");
const { ctrlWrapper, HttpError } = require("../../helpers");

const deleteMeal = async (req, res) => {
  const { _id: id } = req.params;
  const result = await Meal.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(deleteMeal);
