const { ctrlWrapper, HttpError } = require("../../helpers");
const { Filter } = require("../../models/filter");
const endpoints = require("./endpoints");

const getCategoryByFilter = async (req, res) => {
  const { filter } = req.params;

  if (!Object.keys(endpoints).includes(filter))
    throw HttpError(404, "Not found");

  const result = await Filter.find({ filter: endpoints[filter].filter });

  res.json(result);
};

module.exports = ctrlWrapper(getCategoryByFilter);
