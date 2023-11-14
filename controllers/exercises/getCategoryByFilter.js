const {
  ctrlWrapper,
  HttpError,
} = require("../../helpers/index.js");
const { Filter } = require("../../models/filter");
const  endpoints  = require("./endpoints");


const getCategoryByFilter = async (req, res) => {
  const { filter } = req.params;
console.log(endpoints);
  let result;

  if (filter === "bodyparts") {
    result = await Filter.find(
      { filter: "Body parts" },
      // {},
      // paginationParams(page, limit)
    );
  } else if (filter === "muscles") {
    result = await Filter.find(
      { filter: "Muscles" },
      // {},
      // paginationParams(page, limit)
    );
  } else if (filter === "equipment") {
    result = await Filter.find(
      { filter: "Equipment" },
      // {},
      // paginationParams(page, limit)
    );
  } else {
    throw HttpError(400, "No category with this name");
  }

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getCategoryByFilter);
