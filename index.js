const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "rota funcionando" });
});

app.listen(3000, () => {
  console.log("Online");
});
