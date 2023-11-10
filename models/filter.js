const { Schema, model } = require("mongoose");

const filterSchema = new Schema({
  filter: {
    type: String,
    requiered: true,
  },
  name: {
    type: String,
    requiered: true,
  },
  imgUrl: {
    type: String,
    requiered: true,
  },
});

const Filter = model("filters", filterSchema);

module.exports = {
  Filter,
};
