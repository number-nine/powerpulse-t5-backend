const { ctrlWrapper, HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const viewDev = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "User not found");
  }

  res.json({
    ...user
  });
};

module.exports = ctrlWrapper(viewDev);
