const validateBody = require('./validateBody');
const isValidProduct = require("./isValidProduct");
const authenticate = require('./authenticate');
const upload = require('./upload');

module.exports = {
  validateBody,
  authenticate,
  isValidProduct,
  upload,
};