const { Workout } = require("../../models/workout");
const { ctrlWrapper, HttpError } = require("../../helpers");

const deleteWorkout = async (req, res) => {
  const { _id: id } = req.params;
  const result = await Workout.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(deleteWorkout);
