const validateBody = require('./validateBody');
const isValidProduct = require("./isValidProduct");
const isValidExercise = require("./isValidExercise")
const authenticate = require('./authenticate');
const upload = require('./upload');

module.exports = {
  validateBody,
  authenticate,
  isValidProduct,
  isValidExercise,
  upload,
};