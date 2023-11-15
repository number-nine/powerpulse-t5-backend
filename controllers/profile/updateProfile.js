const { Profile } = require("../../models/profile");
const { ctrlWrapper } = require("../../helpers");

const updateProfile = async (req, res, next) => {
  const { _id: id } = req.user;
  let profile = await Profile.findOne({ owner: id });
  if (!profile) {
    next();
    return;
  }
  profile = await Profile.findByIdAndUpdate(
    profile._id,
    { ...req.body },
    {
      new: true,
    }
  ).populate("owner", "name email avatarURL");

  res.json(profile);
};

module.exports = ctrlWrapper(updateProfile);
