const { ctrlWrapper, HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const deleteDev = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "User not found");
    }
    
    await User.deleteOne({ _id: user._id });

  res.json({
    ...user,
  });
};

module.exports = ctrlWrapper(deleteDev);
