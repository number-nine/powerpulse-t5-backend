const { Meal } = require("../../models/meal");
const { ctrlWrapper, HttpError } = require("../../helpers");

const getMealsByDate = async (req, res) => {
  const { _id } = req.user;
  const { date } = req.body;
  const result = await Meal.find({owner_id: _id, date});
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getMealsByDate);
