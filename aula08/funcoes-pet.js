const moment = require("moment")




// Solução traduzida do ex da aula 08 com moment

// console.log(moment("15092005", "DDMMYYYY").fromNow())
// teste de tradução
// moment.locale('pt-br')
// console.log(moment.locale())
// console.log(moment().format('DD/MM/YYYY'))

// Solução traduzida do ex da aula 08 com date-fns


const listarPets = (pets) => {
  pets.forEach((pet) => {
    console.log("Nome: " + pet.nome + "\n" + "Tipo: " + pet.tipo);
  });
  console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}

const validaDados = (objetoPet) => {
  return (
    typeof objetoPet.nome === 'string' &&
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' &&
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' &&
    typeof objetoPet.vacinado === 'boolean'
  ) 
}

const cadastrarPet = (pets, objetoPet) => {
  if (typeof objetoPet == "object") {  
    if(validaDados(objetoPet)){
      pets.push(objetoPet)
      console.log(pets)
    } else {
      console.log("O objeto informado não possui todas as propriedades necessárias")
    }
  } else {
    console.log("Informe um objeto para cadastrar um novo pet")
  }
}

const servicosPrestados = (pet, servicoRealizado) => {
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

const cadastrarPetsSpreadOperator = (pets, json) => {
  let arrayPetsJson = JSON.parse(json);
  pets.push(...arrayPetsJson)

  return pets
}

const cadastrarPetsFor = (pets, json) => {
  let arrayPetsJson = JSON.parse(json)

  for (let index = 0; index < arrayPetsJson.length; index++) {    
    pets.push(arrayPetsJson[index])
  }

  return pets
}

const filtrarPetPorNome = (lista, nomePet) => {
  let petsFiltrados = lista.filter((pet) => {
    return pet.nome == nomePet
  });

  if(petsFiltrados.length > 0){
    return petsFiltrados
  } else {
    return "Nenhum pet foi encontrado com o nome " + nomePet
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

const removerPet = (id, lista) => {
  let pet = lista.filter((pet) => {
    return pet.id == id
  });

  if(pet.length > 0){
    lista.splice(id - 1, 1)
    console.log(lista)
  } else {
    console.log("Não encontramos nenhum pet com o id: " + id)
  }
}

module.exports = { 
  listarPets,
  cadastrarPet,
  servicosPrestados,
  darBanhoNoPet,
  tosarPet,
  cadastrarPetsSpreadOperator,
  cadastrarPetsFor,
  filtrarPetPorNome,
  contaVacina,
  removerPet
}