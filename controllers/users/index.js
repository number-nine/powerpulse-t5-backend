const register = require("./register");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerification = require('./resendVerification');
const restorePasswordToken = require("./restorePasswordToken");
const updatePassword = require("./updatePassword");
const updateProfile = require("./updateProfile")

/* Development */

const viewDev = require("./viewDev");

const deleteDev = require("./deleteDev")

/* ------------ */

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
  viewDev,
  deleteDev,
  updateProfile,
};
