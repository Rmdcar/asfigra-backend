const Receita = require('../models/Receitas')

//registar receita

exports.registerContribution = async (req, res) => {
    try {
        const {name, mes, ano, dataRecebimento} = req.body
        
    const newContribution = new Receita ({ name, mes, ano, dataRecebimento})
    await newContribution.save()

    res.status(201).json({
        message: 'Receita cadastrada com sucessos',
        error: false})

    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

exports.getContributions = async (req, res) => {
       
    try {
        const contributions = await Receita.find({}).select
        res.status(200).json(contributions)
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

