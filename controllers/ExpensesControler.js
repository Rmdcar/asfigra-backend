const Despesa = require('../models/Expenses')

//registar receita

exports.registerExpense = async (req, res) => {
    try {
        const {categoria, descrição, mes, ano, dataPagamento} = req.body
        
    const newExpense = new Despesa ({ categoria, descrição, mes, ano, dataPagamento})
    await newExpense.save()

    res.status(201).json({
        message: 'Despesa cadastrada com sucessos',
        error: false})

    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}
