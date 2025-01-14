const express = require('express');
const router = express.Router();
const userController = require('./controllers/UserController');
const contributionController = require('./controllers/ContributionController');
const expensesController = require('./controllers/ExpensesController');

// Rotas relacionadas aos usuários
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/getAllUsers', userController.getUsers);
router.delete('/deleteUser/:id', userController.deleteUser);
router.patch('/update/:id', userController.editUser);

// Rotas relacionadas às contribuições
router.post('/newcontribution', contributionController.registerContribution);
router.get('/getallcontributions', contributionController.getContributions);

// Rotas relacionadas às despesas
router.post('/newexpense', expensesController.registerExpense);
router.get('/getallexpenses', expensesController.getExpenses)

module.exports = router;
