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


exports.editContributions = async (req, res) => {
    const { id } = req.params;
    try {
      const { name, mes, ano, dataRecebimento, valor } = req.body;
      const contributionEdited = {
        name, mes, ano, dataRecebimento, valor
      };
      const contribution = await Receita.findByIdAndUpdate(id, contributionEdited, {
        new: true,
      });
  
      if (!contribution) {
        res.status(404).json({ error: "receita não encontrada" });
      }
     
  
      res.status(201).json({
        message: "Receita editada com sucessos",
        error: false,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deleteContribution = async (req, res) => {
    const { id } = req.params;
    try {
      const expense = await Receita.findByIdAndDelete(id);
      if (!expense) {
        res.status(404).json({ erro: "Receita não encontrada" });
      }
      res.status(200).send("Receita deletada");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };