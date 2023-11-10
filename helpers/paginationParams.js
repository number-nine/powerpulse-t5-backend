const HttpError = require("./HttpError.js");

const paginationParams = (page, limit) => {
  let normilizedPage = 1;
  let normalizerLimit = 20;
  if (!isNaN(Number(page)) && page > 0) {
    normilizedPage = page;
  } else {
    throw HttpError(400, "The value of page must be a number");
  }

  if (!isNaN(Number(limit)) && limit > 0) {
    normalizerLimit = limit;
  } else {
    throw HttpError(400, "The value of limit must be a number");
  }
  return {
    skip: (normilizedPage - 1) * normalizerLimit,
    limit: normalizerLimit,
  };
};

module.exports = paginationParams;
