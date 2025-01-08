const mongoose = require("mongoose");

const receitaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mes: {
    type: String,
    required: true   
  },
  ano: {
    type: String,
    required: true   
  },
  dataRecebimento: {
    type: Date,
    required: true   
  }
});

const ReceitaModel = mongoose.model("Receitas", receitaSchema)

module.exports = ReceitaModel