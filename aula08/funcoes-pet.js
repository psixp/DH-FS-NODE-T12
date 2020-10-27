const moment = require("moment")
// Listar Pets

console.log(moment().format('DD/MM/YYYY'))
console.log(moment("15092005", "DDMMYYYY").fromNow())
return;

const listaPets = pets =>{
    pets.forEach((pet) =>{
        console.log(`Nome: ${pet.nome}\nTipo:${pet.tipo}`)
    })
    console.log("Temos o total de " + pets.length + " no sistema")
}


//Validador
function validaDados(objetoPet){
    return(
    typeof objetoPet.nome === 'string' &&
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' &&
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' &&
    typeof objetoPet.vacinado === 'boolean')
}


// Cadastrar Pets
let cadastrarPet = (pets, objetoPet) =>{
    if (typeof objetoPet == "object"){
        if (validaDados(objetoPet)){
            pets.push(objetoPet)
        }else {
            console.log('O obj informado não possui todas as propriedades necessarias')
        }
    }else{
        console.log("Informe blablabla...")
    }
    
    console.log(pets)
}

// Serviços para Pets
let servicosPrestados = (pet, servicoRealizado) =>{
    servicoRealizado(pet)
}

//Dar Banho no Pet
let darBanhoNoPet = (pet) =>{
    pet.servicos.push("banho")
    console.log(`O pet ${pet.nome} tomou banho na data ${moment().format('DD/MM/YYYY')}`)
}

// Tosar o Pet
let tosarPet = (pet) =>{
    pet.servicos.push("tosar")
    console.log(`O pet ${pet.nome} foi tosado na data ${moment().format('DD/MM/YYYY')}`)
}

// Filtra Pets
let filtraPet = (lista, nomePet) =>{
    let petsFiltrados = lista.filter((pet) =>{
        return pet.nome == nomePet
    })

    if(petsFiltrados.length > 0){
        return petsFiltrados
    }else {
        return "Nenhum pet encontrado com o nome" + nomePet
    }
}

// Contador de Pets
let contaVacina = (lista) =>{
    let contTrue = 0
    let contFalse = 0
    let petsParaVacinar = []
    lista.filter((pet) =>{
        if(pet.vacinado){
          contTrue ++   
        }else{
            contFalse ++
            petsParaVacinar.push(pet.nome)
        }
    })
    console.log("--------------------------------------------")
    console.log(`temos ${contTrue} pet vacinado(s)`)
    console.log(`temos ${contFalse} pet não vacinado(s)`)
    console.log("--------------------------------------------")
    console.log("Os pets que precisam tomar a vacina XXX são:\n")
    for(let pets in petsParaVacinar){
        console.log(petsParaVacinar[pets])
    }
    console.log("--------------------------------------------")
}

// Remover Pets

const removerPet = (id, lista) =>{
    let pet = lista.filter((pet) =>{
        return pet.id == id 
        })
    if(pet.length > 0){
        pets.splice(id -1, 1)
        console.log(pets)
    }else{
        console.log("Não encontramos o pet")
    }
}

module.exports = {
    listaPets,
    cadastrarPet,
    servicosPrestados,
    darBanhoNoPet,
    tosarPet,
    filtraPet,
    contaVacina,
    removerPet
}