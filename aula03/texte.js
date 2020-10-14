// let boasVindas = 'Olá, sou Carlos!'
// let nomeUsuario = boasVindas.slice(9,15)
// console.log(boasVindas)
// console.log(nomeUsuario) 


// // arrow function
// let ola = () => "Olá, Pessoal!"
// console.log(ola())

/* let dobro = (numero) => numero * 2

let triplo = (numero) => numero * 3

let aplicar = (numero, operacao) => {
    console.log(operacao(numero))
}

aplicar(4, triplo) */

function adicionarHttp(url) {
    return "http://" + url
}

//console.log(adicionarHttp("www.yahoo.com"))


function processar(sites,funcao){
    let novaLista = []
    for(var i = 0; i < sites.length; i ++){
        novaLista.push(funcao(sites[i]))
    }
    return novaLista
} 



processar(["www.google.com","www.yahoo.com","www.halo.com","www.xvideos.com"], adicionarHttp)
