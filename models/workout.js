const { Schema, model } = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const { handleMongooseError } = require("../helpers");

const workoutSchema = new Schema(
  {
    owner_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    exercise_id: {
      type: Schema.Types.ObjectId,
      ref: "exercises",
      required: true,
    },
    time: {
      type: Number,
      validate: {
        validator: function (value) {
          return value > 0;
        },
        message: "Time must be > 0",
      },
      required: true,
    },
    burnedCalories: {
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

workoutSchema.post("save", handleMongooseError);

const Workout = model("workout", workoutSchema);

const createWorkout = Joi.object({
  exercise_id: Joi.objectId().required(),
  time: Joi.number().greater(0).max(120).required(),
  date: Joi.date().required(),
});

const updateWorkout = Joi.object({
  _id: Joi.objectId().required(),
  time: Joi.number().greater(0).max(120).required(),
});

const deleteWorkout = Joi.object({
  _id: Joi.objectId().required(),
});

const getWorkoutsByDate = Joi.object({
  date: Joi.date().required(),
});

const schemas = {
  createWorkout,
  updateWorkout,
  deleteWorkout,
  getWorkoutsByDate,
};

module.exports = {
  schemas,
  Workout,
};
