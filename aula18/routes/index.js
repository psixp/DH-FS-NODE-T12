// importações
var express = require('express');
var router = express.Router();
const IndexController = require('../controller/indexController')
const PizzasController = require('../controller/PizzasController')

/* GET home page. */
router.get('/', IndexController.showIndex)
router.get('/sobre',IndexController.showSobre)
router.get('/pizzas/:id', PizzasController.getPizza)

module.exports = router;
