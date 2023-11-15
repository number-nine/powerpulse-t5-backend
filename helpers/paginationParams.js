const HttpError = require("./HttpError.js");

const paginationParams = (page, limit) => {
  const ERROR_MESSAGE =
    "The value of pagination parameters must be an integer greater than 0";
  let normilizedPage = 1;
  let normalizedLimit = 20;

  if (typeof page === "undefined" || typeof limit === "undefined") return {};

  if (!isNaN(Number(page)) && page > 0) {
    normilizedPage = page;
  } else {
    throw HttpError(400, ERROR_MESSAGE);
  }

  if (!isNaN(Number(limit)) && limit > 0) {
    normalizedLimit = limit;
  } else {
    throw HttpError(400, ERROR_MESSAGE);
  }
  return {
    skip: (normilizedPage - 1) * normalizedLimit,
    limit: normalizedLimit,
  };
};

module.exports = paginationParams;
