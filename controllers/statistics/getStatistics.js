const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models/user.js");
const { Workout } = require("../../models/workout.js");

const getStatistics = async (req, res) => {
  // const userCount = await User.countDocuments();

  // const workoutCount = await Workout.countDocuments();

  // const burnedCalories = await Workout.find({}, "burnedCalories");

  // const burnedCaloriesValues = burnedCalories.map(
  //   (workout) => workout.burnedCalories
  // );
  // const burnedCaloriesSum = burnedCaloriesValues.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   0
  // );

  // const workoutsTime = await Workout.find({}, "time");
  // const workoutsTimeValues = workoutsTime.map((workout) => workout.time);
  // const workoutsTimeSum = workoutsTimeValues.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   0
  // );
  const aggregationPipeline = [
    {
      $group: {
        _id: null,
        workoutCount: { $sum: 1 },
        burnedCaloriesSum: { $sum: "$burnedCalories" },
        workoutsTimeSum: { $sum: "$time" },
      },
    },
  ];

  const statistics = await Workout.aggregate(aggregationPipeline);

  if (statistics.length > 0) {
    const userCount = await User.countDocuments();
    res.json({ ...statistics[0], userCount });
  } else {
    const userCount = await User.countDocuments();
    res.json({
      userCount,
      workoutCount: 0,
      burnedCaloriesSum: 0,
      workoutsTimeSum: 0,
    });
  }
};

module.exports = ctrlWrapper(getStatistics);
