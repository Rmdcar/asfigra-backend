const express = require('express');
const router = express.Router();
const userController = require('./controllers/UserController');
const contributionController = require('./controllers/ContributionController');
const expensesController = require('./controllers/ExpensesController');
const autentication = require('./middlewares/Auth')
const emailController = require("./controllers/emailController");


// Rotas relacionadas aos usuários
router.post('/register', autentication.autenticacao, userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/getAllUsers', autentication.autenticacao, userController.getUsers);
router.get('/getUser/:id', autentication.autenticacao, userController.getUser);
router.delete('/deleteUser/:id', autentication.autenticacao, userController.deleteUser);
router.patch('/update/:id', autentication.autenticacao, userController.editUser);

// Rotas relacionadas às contribuições
router.post('/newcontribution', autentication.autenticacao, contributionController.registerContribution);
router.get('/getallcontributions',  autentication.autenticacao, contributionController.getContributions);
router.get('/getcontributionbyuser/:id',autentication.autenticacao, contributionController.getContributionbyUser);
router.patch('/updatecontribution/:id', autentication.autenticacao, contributionController.editContributions)
router.delete('/deletecontribution/:id', autentication.autenticacao, contributionController.deleteContribution)

// Rotas relacionadas às despesas
router.post('/newexpense', autentication.autenticacao, expensesController.registerExpense);
router.get('/getallexpenses', autentication.autenticacao, expensesController.getExpenses)
router.patch('/updateexpense/:id', autentication.autenticacao, expensesController.editExpenses)
router.delete('/deleteexpense/:id', autentication.autenticacao, expensesController.deleteExpense)



// Rota para enviar e-mail
router.post("/enviar-email", emailController.enviarEmail);

module.exports = router;
