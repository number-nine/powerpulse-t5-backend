const { Workout } = require("../../models/workout");
const { ctrlWrapper, HttpError } = require("../../helpers");

const deleteWorkout = async (req, res) => {
  const { _id } = req.params;
  const { _id: userId } = req.user;
  const result = await Workout.findOneAndDelete({ _id, owner_id: userId });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(deleteWorkout);
