// controllers atuaizados
const path = require("path")

// npm install path
// dirname para dar o caminho do arquivo de forma resumida

module.exports = {
    index(req, res){
        let pathFile = __dirname + '/teste.html'
        res.sendFile(pathFile)
        

        //res.sendFile(path.join(__dirname + './teste.html'))
        //res.send('Fala! Você está na home page')
    },

    postIndex(req, res){
        res.send(req.body)
    },

    cumprimentar(req, res){
        console.log(res.statusCode)

        let {nome} = req.params
        res.send(`Fala ${nome}!`)
        //console.log(nome)
    },
    calcular(req, res){
        let {num1, num2} = req.params
        
        if(typeof num2 != "undefined"){
            let resultado = parseInt(num1) + parseInt(num2)
            res.send(`${resultado}`)
        }
        else{
            res.send(`${num1}`)
        }
    },
    getQueryParams(req, res) {
        let { nome } = req.params;
        let { sobrenome } = req.query;
        res.send(`Olá, ${nome} ${sobrenome}`);
        console.log(nome)
        console.log(sobrenome)
      },

}
