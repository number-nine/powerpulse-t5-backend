const { ProductsCategory } = require("../../models/productsCategory");
const { ctrlWrapper } = require("../../helpers");

const getAllCategories = async (req, res) => {

  const result = await ProductsCategory.find();
  res.json(result);
};

module.exports = ctrlWrapper(getAllCategories);
