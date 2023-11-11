const { HttpError } = require("../helpers");
const { Exercise } = require("../models/exercise");

const isValidExercise = async (req, res, next) => {
  const { exercise_id: exerciseId } = req.body;
  const exercise = await Exercise.findById(exerciseId);
  if (!exercise) next(HttpError(400, `${exerciseId} is not valid exercise ID`));
  req.exercise = exercise;
  next();
};

module.exports = isValidExercise;
