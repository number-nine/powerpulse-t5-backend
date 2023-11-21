const { Profile } = require("../../models/profile");
const { ctrlWrapper, dateToShortFormat, calculateBrm } = require("../../helpers");

const updateProfile = async (req, res, next) => {
  const { _id: id } = req.user;
  req.body.birthday = dateToShortFormat(req.body.birthday);

  let profile = await Profile.findOne({ owner: id });
  if (!profile) {
    next();
    return;
  }
    const { height, currentWeight, sex, levelActivity, birthday } = req.body;

  profile = await Profile.findByIdAndUpdate(
    profile._id,
    {
      ...req.body,
      brm: calculateBrm(height, currentWeight, sex, levelActivity, birthday),
    },
    {
      new: true,
    }
  ).populate("owner", "name email avatarURL");

  res.json(profile);
};

module.exports = ctrlWrapper(updateProfile);
