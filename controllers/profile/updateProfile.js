const { Profile } = require("../../models/profile");
const { ctrlWrapper, dateToShortFormat, calculateBmr } = require("../../helpers");

const updateProfile = async (req, res, next) => {
  const { _id: id } = req.user;
  req.body.birthday = dateToShortFormat(req.body.birthday);
// console.log(req.body);
  let profile = await Profile.findOne({ owner: id });
  if (!profile) {
    next();
    return;
  }
    const { height, currentWeight, sex, levelActivity, birthday } = req.body;
console.log(height, currentWeight, sex, levelActivity, birthday);
  profile = await Profile.findByIdAndUpdate(
    profile._id,
    {
      ...req.body,
      bmr: calculateBmr(height, currentWeight, sex, levelActivity, birthday),
    },
    {
      new: true,
    }
  ).populate("owner", "name email avatarURL");

  res.json(profile);
};

module.exports = ctrlWrapper(updateProfile);
