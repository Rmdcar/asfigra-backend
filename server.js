const dotenv = require('dotenv')
dotenv.config()
const connectToDataBase  = require('./database/connect')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoutes = require('./Routes')


const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    app.use(cors());
    next();
})

app.use(bodyParser.json())

connectToDataBase()

app.use((req, res, next) =>{
    console.log(`Tipo de requisição: ${req.method}`)
    console.log(`Tipo de requisição: ${req.headers["content-type"]}`)
    console.log(`Tipo de requisição: ${new Date()}`)
    console.log(req.body)
    next()
  })
  


const PORT = 3000

app.use('/', userRoutes)

app.listen(PORT, ()=> {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
}
)