const { User } = require("../../models/user");
const { Profile } = require("../../models/profile");
const { HttpError, ctrlWrapper } = require("../../helpers");

const updateProfile = async (req, res) => {
  const { _id: id } = req.user;
    const { height } = req.body;
  // const user = await User.findOne({ _id: id });
  //  if (!user) throw HttpError(401, "No such user");

  const profile = await Profile.create({
    owner: id,
    // ...req.body
    height,
  });

  res.json({
    profile,
  });
};

module.exports = ctrlWrapper(updateProfile);
