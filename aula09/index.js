const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send('Fala! Você está na home page')
})

// rota parametrizada
app.get('/cumprimentar/:nome?', (req, res) =>{
    // console.log(req.params)
    // return
    // sem desestruturação
    // let nome = req.params.nome

    // ideal com desestruturação
    let {nome} = req.params
    res.send(`Olá ${nome}`)
})



// Desafio - Criar uma rota parametrizada, que irá se chamar /calcular 
// e terá dois parâmetros que serão números, caso, receba apenas o primeiro parâmetro, 
// deverá retornar ele, ou, caso recebe os dois parâmetros 
// terá que somar os dois e retornar
// o resultado.

app.get('/:num1/:num2?', (req, res) =>{
    let {num1, num2} = req.params
    
    if(typeof num2 !== "undefined"){
        let resultado = parseInt(num1) + parseInt(num2)
        res.send(`${resultado}`)
    }
    else{
        res.send(`${num1}`)
    }
})

app.listen(1170, () => {
console.log('Servidor funcionando na porta: 1170')})