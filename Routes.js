const express = require('express')
const router = express.Router()
const userController = require('./controllers/UserController')
const contribution = require('./controllers/ContributionController')
const expenses = require('./controllers/ExpensesControler')

//routes related to users
router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.get('/getAllUsers', userController.getUsers)
router.delete('/deleteUser/:id', userController.deleteUser)
router.patch('/update/:id', userController.editUser)

//routes related to contributions
router.post('/newcontribution', contribution.registerContribution)
router.get('/getallcontributions', contribution.getContributions)

//routes related to contributions
router.post('/newexpense', expenses.registerExpense)

module.exports = router