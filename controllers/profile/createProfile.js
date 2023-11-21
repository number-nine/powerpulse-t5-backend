const { Profile } = require("../../models/profile");
const {
  ctrlWrapper,
  calculateBrm,
} = require("../../helpers");

const createProfile = async (req, res) => {
  const { _id: id } = req.user;
  console.log(req.body);
  const { height, currentWeight, sex, levelActivity, birthday } = req.body;
  let profile = await Profile.create({
    owner: id,
    brm: calculateBrm(height, currentWeight, sex, levelActivity, birthday),
    ...req.body,
  });
  profile = await profile.populate("owner", "name email avatarURL");

  res.json(profile);
};

module.exports = ctrlWrapper(createProfile);
