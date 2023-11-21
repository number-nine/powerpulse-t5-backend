const HttpError = require("./HttpError");
const ctrlWrapper = require("./ctrlWrapper");
const handleMongooseError = require("./handleMongooseError");
const paginationParams = require("./paginationParams");
const patterns = require("./patterns");
const normalizeAvatar = require("./normalizeAvatar");
const sendEmail = require("./sendEmail");
const dateToShortFormat = require("./dateToShortFormat");
const calculateBmr =  require("./calculateBmr")
// const cloudinary = require("./cloudinary");

module.exports = {
  HttpError,
  ctrlWrapper,
  handleMongooseError,
  paginationParams,
  patterns,
  normalizeAvatar,
  sendEmail,
  dateToShortFormat,
  calculateBmr,
  // cloudinary,
};
