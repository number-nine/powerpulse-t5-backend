const { Profile } = require("../../models/profile");
const { ctrlWrapper } = require("../../helpers");

const getProfile = async (req, res) => {
const { _id: id } = req.user;
  const result = await Profile.findOne({ owner: id }).populate('owner', 'name email')
  res.json(result);
};

module.exports = ctrlWrapper(getProfile);
