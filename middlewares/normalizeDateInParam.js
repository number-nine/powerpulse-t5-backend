const {dateToShortFormat} = require("../helpers")

const normalizeDateInParam = async (req, res, next) => {
  const { date } = req.param;

  req.param.date = dateToShortFormat(date);
  next();
};

module.exports = normalizeDateInParam;
