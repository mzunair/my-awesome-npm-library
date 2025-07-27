const { format } = require("date-fns");

function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date");
  }
  return format(date, "yyyy-MM-dd");
}

module.exports = { formatDate };