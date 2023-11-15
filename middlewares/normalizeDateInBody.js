const normalizeDateInBody = async (req, res, next) => {
  const { date } = req.body;
  const incomingDate = new Date(date);

  const normalizedDate =
    incomingDate.getUTCFullYear() +
    "-" +
    (incomingDate.getUTCMonth() + 1) +
    "-" +
    incomingDate.getUTCDate();

  req.body.date = normalizedDate;
  next();
};

module.exports = normalizeDateInBody;
