const { Product } = require("../../models/product");
const { ctrlWrapper } = require("../../helpers");

const getAllByBlood = async (req, res) => {
    const { allowed = true, page = 1, limit = 20 } = req.query;
  // const { _id: category } = req.user;
  // const { page = 1, limit = 20 } = req.query;

  // const findFilter = { category };

  const result = await Product
    .find
    // findFilter,
    // {},
    // {
    //   ...paginationParams(page, limit),
    // }
    ()
    .populate("category");
  res.json(result);
};

module.exports = ctrlWrapper(getAll);
