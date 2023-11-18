const { Profile } = require("../../models/profile");
const { ctrlWrapper, dateToShortFormat } = require("../../helpers");

const createProfile = async (req, res) => {
  const { _id: id } = req.user;
  req.body.birthday = dateToShortFormat(req.body.birthday);
  let profile = await Profile.create({
    owner: id,
    ...req.body,
  });
  profile = await profile.populate("owner", "name email avatarURL");

  res.json(profile);
};

module.exports = ctrlWrapper(createProfile);
