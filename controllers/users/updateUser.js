const { User } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");

const updateUser = async (req, res) => {
  const { _id: id } = req.user;
  const result = await User.findByIdAndUpdate(
    id,
    { ...req.body },
    {
      fields: { _id: 1, name: 1, email: 1, avatarURL: 1 },
      new: true,
    }
  );

  res.json(result);
};

module.exports = ctrlWrapper(updateUser);
