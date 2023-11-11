// const { User } = require("../../models/user");
const { Profile } = require("../../models/profile");
const { ctrlWrapper } = require("../../helpers");

const updateProfile = async (req, res) => {
  const { _id: id } = req.user;
 
    let profile = await Profile.create({
      owner: id,
      ...req.body,
    });
    profile = await profile.populate("owner", "name email");
  

  res.json(profile);
};

module.exports = ctrlWrapper(updateProfile);
