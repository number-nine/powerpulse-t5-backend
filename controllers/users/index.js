const register = require("./register");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const updateAvatarCloudinary = require("./updateAvatarCloudinary");
const verifyEmail = require("./verifyEmail");
const resendVerification = require("./resendVerification");
const updateUser = require("./updateUser");

module.exports = {
  register,
  login,
  current,
  logout,
  updateAvatarCloudinary,
  verifyEmail,
  resendVerification,
  updateUser,
};
