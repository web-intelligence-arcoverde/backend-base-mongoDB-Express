const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "rota funcionando" });
});

module.exports = router;
