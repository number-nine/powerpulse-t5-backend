const fs = require("fs/promises");
const path = require("path");

const { ctrlWrapper, normalizeAvatar } = require("../../helpers");
const cloudinary = require("../../helpers/cloudinary");
// const { User } = require("../../models/user");

// const avatarStoragePath = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  // const { path: tempAvatar, filename } = req.file;
  // await normalizeAvatar(tempAvatar, 250);
  // console.log("1st console");
  const { _id } = req.user;
  console.log("r", req.file.path);
  const fileData = await cloudinary.uploader.upload(req.file.path, {
    folder: "avatars",
  });
  console.log("fd", fileData);
  await fs.unlink(req.file.path);
  // const avatarURL = path.join("avatars", filename);
  // const avatarPath = path.join(avatarStoragePath, filename);
  // await fs.rename(tempAvatar, avatarPath);
  // await User.findByIdAndUpdate(_id, { avatarURL });
  // res.json({
  //   avatarURL,
  // });
};

module.exports = ctrlWrapper(updateAvatar);
