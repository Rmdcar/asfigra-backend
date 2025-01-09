const express = require('express')
const router = express.Router()
const userController = require('./controllers/UserController')
const contribution = require('./controllers/ContributionController')
const expenses = require('./controllers/ExpensesControler')

//routes related to users
router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.get('/getAllUsers', userController.getUsers)

//routes related to contributions
router.post('/newcontribution', contribution.registerContribution)

//routes related to contributions
router.post('/newespense', expenses.registerExpense)

module.exports = router