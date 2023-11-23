const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
// const { nanoid } = require("nanoid");

const { User } = require("../../models/user");
const { HttpError, ctrlWrapper, sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password: plainPassword } = req.body;
  const user = await User.findOne({ email });

  if (user) throw HttpError(409, "Email already in use");

  // const avatarURL = "";
  const avatarURL = gravatar.url(email, { s: "250" });

  const password = await bcrypt.hash(plainPassword, 10);

  const newUser = await User.create({
    ...req.body,
    password,
    avatarURL,
    verify: true,
    verificationToken: null,
    // Email verification disabled for development purposes
    // verify: false,
    // verificationToken: nanoid(),
  });

  // await sendEmail({
  //   email: newUser.email,
  //   token: newUser.verificationToken,
  // });

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    avatarURL: newUser.avatarURL,
  });
};

module.exports = ctrlWrapper(signup);
