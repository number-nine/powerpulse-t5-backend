const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const getByDate = Joi.object({
  date: Joi.date().required(),
});

const schemas = {
  getByDate,
};

module.exports = {
  schemas,
};
