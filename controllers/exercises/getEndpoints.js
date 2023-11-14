const { ctrlWrapper} = require("../../helpers");

const endpoints = require("./endpoints");

const getEndpoints = async (req, res) => {
  res.json(endpoints);
};

module.exports = ctrlWrapper(getEndpoints);
