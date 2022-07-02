const utils = require("@src/utils");
const controller = require("./order.controller")(null, utils);

module.exports = require("./order.routes")(controller);
