const cloudinary = require("../../helpers/cloudinary");
const fs = require("fs/promises");

const updateAvatarCloudinary = async (req, res) => {
  try {
    const fileData = await cloudinary.uploader.upload(req.file.path, {
      folder: "avatars",
    });
    console.log("fD", fileData);
    await fs.unlink(req.file.path);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateAvatarCloudinary;
