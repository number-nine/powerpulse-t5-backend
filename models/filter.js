const { Schema, model } = require("mongoose");

const filterSchema = new Schema({
  filter: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const Filter = model("filters", filterSchema);

module.exports = {
  Filter,
};
