const { Product } = require("../../models/product");
const { Profile } = require("../../models/profile");
const { ctrlWrapper, paginationParams } = require("../../helpers");

const getFilteredProducts = async (req, res) => {
  const { _id: id } = req.user;
  const { recommended, category, query, page, limit } = req.query;

  let result = [];
  const findFilter = {};

  const profile = await Profile.findOne({ owner: id });

  if (profile) {
    if (typeof recommended !== "undefined") {
      findFilter[`groupBloodNotAllowed.${profile.blood}`] =
        recommended.toLowerCase() === "false";
      console.log(findFilter);
    }

    if (typeof query !== "undefined") {
      findFilter.title = { $regex: new RegExp(query, "i") };
    }

    result = await Product.find(
      findFilter,
      {},
      paginationParams(page, limit)
    ).populate("category");
  }

  res.json(result);
};

module.exports = ctrlWrapper(getFilteredProducts);
