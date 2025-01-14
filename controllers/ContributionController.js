const Receita = require('../models/Receitas');

// Registrar receita
exports.registerContribution = async (req, res) => {
    try {
        const { name, mes, ano, dataRecebimento, valor } = req.body;

        const newContribution = new Receita({ name, mes, ano, dataRecebimento, valor });
        await newContribution.save();

        res.status(201).json({
            message: 'Receita cadastrada com sucesso',
            error: false,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obter todas as contribuições
exports.getContributions = async (req, res) => {
    try {
        const contributions = await Receita.find({});
        res.status(200).json(contributions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
