const { Schema, model } = require("mongoose");

const productsCategorySchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Define category name"],
    },
  },
  { versionKey: false }
);

const ProductsCategory = model(
  "productsCategory",
  productsCategorySchema,
  "productsCategories"
);

module.exports = {
  ProductsCategory,
};
