const { ctrlWrapper } = require("../../helpers/index.js");
const { Filter } = require("../../models/filter.js");

const getAllExercisesCategories = async (req, res) => {
  const allFilters = await Filter.find();
  // const result = allFilters.map((item) => {
  //   console.log(item.imgUrl);
  //   return item.imgUrl;
  // });

  // res.json(result);
  const groupedFilters = allFilters.reduce((result, filter) => {
    const { filter: category, name, imgURL } = filter;

    if (!result[category]) {
      result[category] = [];
    }

    result[category].push({ name, imgURL });

    return result;
  }, {});

  res.json(groupedFilters);
};

module.exports = ctrlWrapper(getAllExercisesCategories);
