// controllers atuaizados

module.exports = {
    index(req, res){
        res.send('Fala! Você está na home page')
    },

    cumprimentar(req, res){
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
