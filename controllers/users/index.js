const register = require("./register");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const updateSubscribtion = require("./updateSubscribtion");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerification = require('./resendVerification');
const restorePasswordToken = require("./restorePasswordToken");
const updatePassword = require("./updatePassword");

module.exports = {
  register,
  login,
  current,
  logout,
  updateSubscribtion,
  updateAvatar,
  verifyEmail,
  resendVerification,
  restorePasswordToken,
  updatePassword,
};
