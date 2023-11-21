const { Profile } = require("../../models/profile");
const { ctrlWrapper, HttpError } = require("../../helpers");

const getBmr = async (req, res) => {
  const { _id: id } = req.user;
  const result = await Profile.findOne({ owner: id });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  const targetBmr = result.bmr
  const targetTime = 110;

  res.json({ targetBmr, targetTime });
};

module.exports = ctrlWrapper(getBmr);
