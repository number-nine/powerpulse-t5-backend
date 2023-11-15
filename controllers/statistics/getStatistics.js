const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models/user.js");
const { Workout } = require("../../models/workout.js");
const { Exercise } = require("../../models/exercise.js");

const getStatistics = async (req, res) => {
  const aggregationPipeline = [
    {
      $group: {
        _id: Date.now(),
        workoutCount: { $sum: 1 },
        burnedCaloriesSum: { $sum: "$burnedCalories" },
        workoutsTimeSum: { $sum: "$time" },
      },
    },
  ];

  const statistics = await Workout.aggregate(aggregationPipeline);

  if (statistics.length > 0) {
    const userCount = await User.countDocuments();
    const videoCount = await Exercise.countDocuments();
    res.json({ ...statistics[0], userCount, videoCount });
  } else {
    const userCount = await User.countDocuments();
    const videoCount = await Exercise.countDocuments();
    res.json({
      userCount,
      videoCount,
      workoutCount: 0,
      burnedCaloriesSum: 0,
      workoutsTimeSum: 0,
    });
  }
};

module.exports = ctrlWrapper(getStatistics);
