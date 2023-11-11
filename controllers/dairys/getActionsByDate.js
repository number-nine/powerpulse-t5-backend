const { Workout } = require("../../models/workout");
const { Meal } = require("../../models/meal");
const { ctrlWrapper, HttpError } = require("../../helpers");

const getActionsByDate = async (req, res) => {
  const { _id } = req.user;
  const { date } = req.body;
  const workouts = await Workout.find({ owner_id: _id, date });
  const meals = await Meal.find({ owner_id: _id, date });

  if (!workouts || !meals) {
    throw HttpError(404, "Not found");
  }
  res.json({ workouts, meals });
};

module.exports = ctrlWrapper(getActionsByDate);
