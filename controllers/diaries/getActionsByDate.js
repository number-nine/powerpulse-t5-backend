const { Workout } = require("../../models/workout");
const { Meal } = require("../../models/meal");
const { ctrlWrapper, HttpError } = require("../../helpers");

const getActionsByDate = async (req, res) => {
  const { _id } = req.user;
  const { date } = req.params;
  const workouts = await Workout.find({ owner_id: _id, date }).populate(
    "exercise_id"
  );
  const meals = await Meal.find({ owner_id: _id, date }).populate("product_id");

  if (!workouts || !meals) {
    throw HttpError(404, "Not found");
  }
  res.json({ workouts, meals });
};

module.exports = ctrlWrapper(getActionsByDate);
