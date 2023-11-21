const { Meal } = require("../../models/meal");
const { Product } = require("../../models/product");
const { ctrlWrapper, HttpError } = require("../../helpers");

const updateMeal = async (req, res) => {
  const { weight, _id: id } = req.body;
  const { _id: userId } = req.user;
  const result = await Meal.findOne({_id: id, owner_id: userId});

  if (!result) {
    throw HttpError(404, "Not found");
  }
  const { product_id: productId } = result;
  const refProduct = await Product.findById(productId);

  if (!refProduct) {
    throw HttpError(404, "Not found");
  }
  const { calories: basicCalories, weight: basicWeight } = refProduct;
  const profile = await Meal.findByIdAndUpdate(
    id,
    {
      weight,
      calories: ((basicCalories / basicWeight) * weight).toFixed(2),
    },
    {
      new: true,
    }
  ).populate({ path: "product_id", populate: { path: "category" } });

  res.json(profile);
};

module.exports = ctrlWrapper(updateMeal);
