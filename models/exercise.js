const { Schema, model } = require("mongoose");
const Joi = require("joi");

const exerciseSchema = new Schema({
  bodyPart: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  },
  gifUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  burnedCalories: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

const Exercise = model("exercises", exerciseSchema);

const filterExercises = Joi.object({
  filter: Joi.string(),
  name: Joi.string(),
  page: Joi.number().min(1),
  limit: Joi.date().min(1),
});

const schemas = {
  filterExercises,
};

module.exports = {
  schemas,
  Exercise,
};
