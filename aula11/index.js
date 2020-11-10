const express = require('express')
const routes = require('./routes/routes.js')

// criando aplicação express
const app = express()

// indicando que a aplicacao ira trabalhar com as rotas
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)


app.listen(1170, () => {
console.log('Servidor funcionando na porta: 1170')})
