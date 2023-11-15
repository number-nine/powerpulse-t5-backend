const normalizeDate = async (req, res, next) => {
  const { date } = req.params;
  const incomingDate = new Date(date);

  const normalizedDate =
    incomingDate.getUTCFullYear() +
    "-" +
    (incomingDate.getUTCMonth() + 1) +
    "-" +
    incomingDate.getUTCDate();

  req.params.date = normalizedDate;
  next();
};

module.exports = normalizeDate;
