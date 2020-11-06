const express = require('express')
const routes = require('./routes/routes.js')

// criando aplicação express
const app = express()


app.use(routes)

app.listen(1170, () => {
console.log('Servidor funcionando na porta: 1170')})