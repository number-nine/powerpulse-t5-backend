const { ctrlWrapper } = require("../../helpers");

const current = async (req, res) => {
  const { email, name, avatarURL } = req.user;
  res.json({
    name,
    email,
    avatarURL,
  });
};

module.exports = ctrlWrapper(current);
