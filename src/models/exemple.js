const mongoose = require("mongoose");

const Exemple = mongoose.model("Exemple", {
  nome: { type: String, require: true },
  pais: [String],
  ano: Number,
  premiacoes: [Object],
});

module.exports = Exemple;
