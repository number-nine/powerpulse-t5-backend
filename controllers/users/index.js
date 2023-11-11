const register = require("./register");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerification = require("./resendVerification");
const restorePasswordToken = require("./restorePasswordToken");
const updatePassword = require("./updatePassword");
const updateUser = require("./updateUser");

module.exports = {
  register,
  login,
  current,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerification,
  restorePasswordToken,
  updatePassword,
  updateUser,
};
