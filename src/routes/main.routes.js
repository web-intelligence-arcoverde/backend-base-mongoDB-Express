const express = require("express");
const router = express.Router();

const Exemple = require("../models/exemple");

router.post("/", async (req, res) => {
  try {
    await new Exemple({}).save;

    res.json({ error: false, message: "rota funcionando" });
  } catch (error) {
    res.json({ error: false, message: error.message });
  }
});

module.exports = router;
