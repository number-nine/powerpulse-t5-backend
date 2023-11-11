const { Workout } = require("../../models/workout");
const { Exercise } = require("../../models/exercise");
const { ctrlWrapper, HttpError } = require("../../helpers");

const updateWorkout = async (req, res) => {
  const { time, _id: id } = req.body;
  const result = await Workout.findById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  const { exercise_id: exerciseId } = result;
  const refExercise = await Exercise.findById(exerciseId);

  if (!refExercise) {
    throw HttpError(404, "Not found");
  }
  const { burnedCalories: basicCalories, time: basicTime } = refExercise;
  const profile = await Workout.findByIdAndUpdate(
    id,
    {
      time,
      burnedCalories: ((basicCalories / basicTime) * time).toFixed(2),
    },
    {
      new: true,
    }
  ).populate("exercise_id");

  res.json(profile);
};

module.exports = ctrlWrapper(updateWorkout);
