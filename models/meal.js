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
  weight: Joi.number().greater(0).max(700).required(),
  date: Joi.date().required().messages({
    "date.base":
      "Date must have any valid ISO date format, for example YYYY-MM-DD.",
    "any.required": "date field is required.",
  }),
});

const updateMeal = Joi.object({
  _id: Joi.objectId().required(),
  weight: Joi.number().greater(0).max(700).required(),
});

const deleteMeal = Joi.object({
  _id: Joi.objectId().required(),
});

const getMealsByDate = Joi.object({
  date: Joi.date().required().messages({
    "date.base":
      "Date must have any valid ISO date format, for example YYYY-MM-DD.",
    "any.required": "date field is required.",
  }),
});

const schemas = {
  createMeal,
  updateMeal,
  deleteMeal,
  getMealsByDate,
};

module.exports = {
  schemas,
  Meal,
};
