const { Schema, model } = require("mongoose");

const trainingSchema = new Schema({
  bodyPart: {
    type: String,
    requiered: true,
    index: true,
  },
  equipment: {
    type: String,
    requiered: true,
  },
  gifUrl: {
    type: String,
    requiered: true,
  },
  name: {
    type: String,
    requiered: true,
  },
  target: {
    type: String,
    requiered: true,
  },
  burnedCalories: {
    type: Number,
    requiered: true,
  },
  time: {
    type: Number,
    requiered: true,
  },
});

const Training = model("exercises", trainingSchema);

module.exports = {
  Training,
};
