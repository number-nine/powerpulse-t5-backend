const { HttpError } = require("../helpers");

const validateParams = (schema) => {
  const validator = (req, res, next) => {
    const { error } = schema.validate(req.params);
      if (error) next(HttpError(400, error.message));
      next()
    };
    return validator
};

module.exports = validateParams;
