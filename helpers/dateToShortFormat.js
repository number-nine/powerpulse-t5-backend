const dateToShortFormat = (date) => {
  const incomingDate = new Date(date);

  const normalizedDate =
    incomingDate.getUTCFullYear() +
    "-" +
    (incomingDate.getUTCMonth() + 1) +
    "-" +
    incomingDate.getUTCDate();

  return normalizedDate;
};

module.exports = dateToShortFormat;
