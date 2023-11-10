const { Meal } = require("../../models/meal");
const { ctrlWrapper } = require("../../helpers");

const updateMeal = async (req, res) => {
  const { _id: id } = req.user;
  const { weight: basicWeight, calories: basicCalories } = req.meal;
  const { weight: actualWeight } = req.body;

  const profile = await Meal.create({
    owner_id: id,
    ...req.body,
    calories: (basicCalories / basicWeight) * actualWeight,
  });

  res.json(profile);
};

module.exports = ctrlWrapper(updateMeal);
