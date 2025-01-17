const Despesa = require("../models/Expenses");

//registar receita

exports.registerExpense = async (req, res) => {
  try {
    const { categoria, descricao, mes, ano, dataPagamento, valor } = req.body;

    const newExpense = new Despesa({
      categoria,
      descricao,
      mes,
      ano,
      dataPagamento,
      valor,
    });
    await newExpense.save();

    res.status(201).json({
      message: "Despesa cadastrada com sucessos",
      error: false,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Despesa.find({});
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editExpenses = async (req, res) => {
  const { id } = req.params;
  try {
    const { categoria, descricao, mes, ano, dataPagamento, valor } = req.body;
    const expeseEdited = {
      categoria,
      descricao,
      mes,
      ano,
      dataPagamento,
      valor,
    };
    const expense = await Despesa.findByIdAndUpdate(id, expeseEdited, {
      new: true,
    });

    if (!expense) {
      res.status(404).json({ error: "despesa não encontrada" });
    }
 
    res.status(201).json({
      message: "Despesa editada com sucesso",
      error: false,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Despesa.findByIdAndDelete(id);
    if (!expense) {
      res.status(404).json({ erro: "Despesa não encontrada" });
    }
    res.status(200).send("Despesa deletada");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
