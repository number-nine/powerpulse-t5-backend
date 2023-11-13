const { Meal } = require("../../models/meal");
const { ctrlWrapper, HttpError } = require("../../helpers");

const getMealsByDate = async (req, res) => {
  const { _id } = req.user;
  const { date } = req.params;
  const result = await Meal.aggregate([
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

    
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getMealsByDate);
