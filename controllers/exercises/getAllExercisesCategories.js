const { ctrlWrapper, HttpError } = require("../../helpers/index.js");
const { Filter } = require("../../models/filter.js");

const getAllExercisesCategories = async (req, res) => {
  const allFilters = await Filter.find();

  const groupedFilters = allFilters.reduce((result, filter) => {
    const { filter: category, name, imgURL } = filter;

    if (!result[category]) {
      result[category] = [];
    }

    result[category].push({ name, imgURL });

    if (!result) {
      throw HttpError(400, "Not found");
    }

    return result;
  }, {});

  res.json(groupedFilters);
};

module.exports = ctrlWrapper(getAllExercisesCategories);
