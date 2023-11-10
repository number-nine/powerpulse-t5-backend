const { Workout } = require("../../models/workout");
const { ctrlWrapper } = require("../../helpers");

const createWorkout = async (req, res) => {
  const { _id: id } = req.user;
  const { time: basicTime, burnedCalories: basicCalories } = req.exercise;
  const { time: actualTime } = req.body;
  
    let result = await Workout.create({
      owner_id: id,
      ...req.body,
      burnedCalories: ((basicCalories / basicTime) * actualTime).toFixed(2),
    });
    
  result = await result.populate("exercise_id");

  res.json(result);
};

module.exports = ctrlWrapper(createWorkout);
