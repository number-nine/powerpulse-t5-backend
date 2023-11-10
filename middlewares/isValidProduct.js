const { HttpError } = require("../helpers");
const { Product } = require("../models/product");

const isValidProduct = async (req, res, next) => {
  const { product_id: productId } = req.body;
    const product = await Product.findById(productId);
  if (!product) next(HttpError(400, `${productId} is not valid product ID`));
  req.product = product;
  next();
};

module.exports = isValidProduct;
