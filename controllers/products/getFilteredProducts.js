const { Product } = require("../../models/product");
const { Profile } = require("../../models/profile");
const { ctrlWrapper, paginationParams } = require("../../helpers");

const getFilteredProducts = async (req, res) => {
  const { _id: id } = req.user;
  const {
    recommended,
    category_id: categoryId,
    query,
    page,
    limit,
  } = req.query;

  let result = [];
  let total = 0;
  const findFilter = {};

  const profile = await Profile.findOne({ owner: id });

  if (profile && typeof recommended !== "undefined") {
    findFilter[`groupBloodNotAllowed.${profile.blood}`] =
      recommended.toLowerCase() === "false";
  }

  if (typeof query !== "undefined") {
    const normilizedQuery = query.toString().trim();
    findFilter.title = { $regex: new RegExp(normilizedQuery, "i") };
  }

  if (typeof categoryId !== "undefined") {
    findFilter.category = categoryId;
  }

  result = await Product.find(
    findFilter,
    {},
    paginationParams(page, limit)
  ).populate("category");

  total = await Product.countDocuments(findFilter);

  res.json({ data: result, total });
};

module.exports = ctrlWrapper(getFilteredProducts);
