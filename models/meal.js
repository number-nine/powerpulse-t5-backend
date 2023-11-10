const { Schema, model } = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const { handleMongooseError } = require("../helpers");

const mealSchema = new Schema(
  {
    owner_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },

    weight: {
      type: Number,
      min: 1,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false }
);

mealSchema.post("save", handleMongooseError);

const Meal = model("meal", mealSchema);

const createMeal = Joi.object({
  product_id: Joi.objectId().required(),
  weight: Joi.number().min(1).required(),
  date: Joi.date().required(),
});

const updateMeal = Joi.object({
  id: Joi.objectId().required(),
  product_id: Joi.objectId(),
  weight: Joi.number().min(1).required(),
  date: Joi.date(),
});


const schemas = {
  createMeal,
  updateMeal,
};

module.exports = {
  schemas,
  Meal,
};
