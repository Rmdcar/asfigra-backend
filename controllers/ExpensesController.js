const Despesa = require('../models/Expenses')

//registar receita

exports.registerExpense = async (req, res) => {
    try {
        const {categoria, descricao, mes, ano, dataPagamento, valor} = req.body
        
    const newExpense = new Despesa ({ categoria, descricao, mes, ano, dataPagamento, valor})
    await newExpense.save()

    res.status(201).json({
        message: 'Despesa cadastrada com sucessos',
        error: false})

    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Despesa.find({});
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
