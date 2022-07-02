require("module-alias/register");
require("dotenv").config();

const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.NODE_PORT || 4000;

app
  .listen(port, () => {
    console.info(`Node.js server is running in port ${port}`);
  })
  .on("error", (error) => {
    console.info(error.message);
  });

const mountRouters = require("./src/api/index.js");
mountRouters(app);