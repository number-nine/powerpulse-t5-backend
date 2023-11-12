const { Workout } = require("../../models/workout");
const { ctrlWrapper, HttpError } = require("../../helpers");

const getWorkoutsByDate = async (req, res) => {
  const { _id } = req.user;
  const { date } = req.params;
  const result = await Workout.find({ owner_id: _id, date });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getWorkoutsByDate);
