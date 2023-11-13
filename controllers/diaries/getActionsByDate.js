const { Workout } = require("../../models/workout");
const { Meal } = require("../../models/meal");
const { ctrlWrapper, HttpError } = require("../../helpers");

const getActionsByDate = async (req, res) => {
  const { _id } = req.user;
  const { date } = req.params;
  const workouts = await Workout.find({ owner_id: _id, date }).populate(
    "exercise_id"
  );
  const meals = await Meal.aggregate([
    {
      $match: {
        date: new Date(date),
        owner_id: _id,
      },
    },
    {
      $lookup: {
        from: "profiles",
        localField: "owner_id",
        foreignField: "owner",
        as: "profile",
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: {
        path: "$profile",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $unwind: {
        path: "$product",
        preserveNullAndEmptyArrays: true,
      },
    },
  ]);

  if (!workouts || !meals) {
    throw HttpError(404, "Not found");
  }
  res.json({ workouts, meals });
};

module.exports = ctrlWrapper(getActionsByDate);
