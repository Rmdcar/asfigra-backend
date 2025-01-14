const mongoose = require("mongoose");

const despesaSchema = new mongoose.Schema({
    categoria: {
    type: String,
    required: true
  },
  descricao: {
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
  dataPagamento: {
    type: Date,
    required: true   
  },
  tipo: {
    type: String,
    default: "despesas", 
    required: true
  },
  valor: {
    type: Number,
    required: true
  }
});

const DespesaModel = mongoose.model("Despesas", despesaSchema)

module.exports = DespesaModel


