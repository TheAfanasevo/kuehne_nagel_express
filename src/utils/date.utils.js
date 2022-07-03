/**
 * Validate the date strings passed as query parameters.
 * @param {string[]} dates
 */
module.exports.validateDateString = (dates) => {
  if (!Array.isArray(dates)) {
    throw new Error("Only array is accepted as valid parameter.");
  }

  dates.forEach((date) => {
    const parsedDate = Date.parse(date);
    if (isNaN(parsedDate)) {
      throw new Error("Date provided in invalid format.");
    }
  });

  return true;
};
