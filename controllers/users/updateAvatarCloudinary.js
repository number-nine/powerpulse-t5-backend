const fs = require("fs/promises");

const { ctrlWrapper } = require("../../helpers");
const cloudinary = require("../../helpers/cloudinary");
const { User } = require("../../models/user");

const updateAvatarCloudinary = async (req, res) => {
  const { _id } = req.user;
  const { secure_url: avatarURL } = await cloudinary.uploader.upload(
    req.file.path,
    {
      folder: "avatars",
    }
  );

  await fs.unlink(req.file.path);

  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({
    avatarURL,
  });
};

module.exports = ctrlWrapper(updateAvatarCloudinary);
