const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models/user.js");
const { Workout } = require("../../models/workout.js");

const getStatistics = async (req, res) => {
  const userCount = await User.countDocuments();

  const workoutCount = await Workout.countDocuments();

  const burnedCalories = await Workout.find({}, "burnedCalories");

  const burnedCaloriesValues = burnedCalories.map(
    (workout) => workout.burnedCalories
  );
  const burnedCaloriesSum = burnedCaloriesValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const workoutsTime = await Workout.find({}, "time");
  console.log(workoutsTime);
  const workoutsTimeValues = workoutsTime.map((workout) => workout.time);
  const workoutsTimeSum = workoutsTimeValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  res.json({
    userCount,
    burnedCaloriesSum,
    workoutCount,
    workoutsTimeSum,
  });
};

module.exports = ctrlWrapper(getStatistics);
