const { ctrlWrapper } = require("../../helpers");

const current = async (req, res) => {
  const { email, name, avatarURL, createdAt } = req.user;
  res.json({
    name,
    email,
    avatarURL,
    createdAt,
  });
};

module.exports = ctrlWrapper(current);
