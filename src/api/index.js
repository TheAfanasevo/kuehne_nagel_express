const fs = require("fs");
const path = require("path");

const srcRoot = path.basename(__dirname);
const baseName = path.basename(__filename);
const mainRouter = require("express").Router({ caseSensitive: true });

function mountRouters(app) {
  fs.readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf(".") !== 0 && file.indexOf("_") !== 0 && file !== baseName
      );
    })
    .forEach((file) => {
      const component = require(path.join(__dirname, file));
      mainRouter.use(`/${srcRoot}/${file}/`, component);
    });

  app.use(mainRouter);
}

module.exports = mountRouters;
