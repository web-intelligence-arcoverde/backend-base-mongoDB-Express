const express = require("express");
const app = express();
const bodyPaser = require("body-parser");

const mongan = require("morgan");
const routes = require("./src/routes/main.routes");

app.use(mongan("dev"));
app.use(bodyPaser.json());

app.use("/", routes);

app.listen(3000, () => {
  console.log("Online");
});
