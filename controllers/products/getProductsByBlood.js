const { Product } = require("../../models/product");
const { Profile } = require("../../models/profile");
const { ctrlWrapper, paginationParams } = require("../../helpers");

const getProductsByBlood = async (req, res) => {
  const { _id: id } = req.user;
  const { allowed = true, page = 1, limit = 20 } = req.query;

  const profile = await Profile.findOne({ owner: id });

  let result = null;
  if (profile) {
    const findFilter = { [`groupBloodNotAllowed.${profile.blood}`]: !allowed };
    result = await Product.find(
      findFilter,
      {},
      {
        ...paginationParams(page, limit),
      }
    ).populate("category");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getProductsByBlood);
