const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  bodyPart: {
    type: String,
    requiered: true,
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

const Exercise = model("exercises", exerciseSchema);

module.exports = {
  Exercise,
};
