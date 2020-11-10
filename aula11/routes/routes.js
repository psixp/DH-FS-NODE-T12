const express = require("express")
const { postIndex } = require("../controllers/primeiroController")
const router = express.Router()
const primeiroController = require("../controllers/primeiroController")

// recebendo as rotas de controllers
router.get('/', primeiroController.index)

router.post('/postIndex', primeiroController.postIndex)

router.get('/cumprimentar/:nome?', primeiroController.cumprimentar)

router.get('/query/:nome', primeiroController.getQueryParams)

router.get('/:num1/:num2?', primeiroController.calcular)



module.exports = router