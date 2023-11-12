const validateBody = require("./validateBody");
const isValidProduct = require("./isValidProduct");
const isValidExercise = require("./isValidExercise");
const authenticate = require("./authenticate");
const validateParams = require("./validateParams");
const normalizeDate = require("./normalizeDate");
const upload = require("./upload");

module.exports = {
  validateBody,
  authenticate,
  isValidProduct,
  isValidExercise,
  validateParams,
  normalizeDate,
  upload,
};
