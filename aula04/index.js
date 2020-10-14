const json = require("./json")

let nome = 'Pet Shop NodeJS DH'


// JSON.parse(resultado)
// console.log(JSON.parse(resultado))






let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true,
      servico: []
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false,
      servico: []
    }
  ];

  function converteJson(lista, json){
    let converte = JSON.parse(json)
    lista.push(converte)
    console.log(lista)
}

converteJson(pets,json)


function listaPets(listaPets){
  let cont = 0
  for(let i in listaPets){
    cont ++
    console.log(`\n nome do pet:  ${listaPets[i].nome}\n Tipo do Pet: ${listaPets[i].tipo}`)
  }
  console.log(` Total de pets: ${cont}`)
}

listaPets(pets)

// Desafio 4 - Criar uma função que adicione pets na nossa lista de pets
// (adicionar elementos no array de objetos), 
// lembrando, que teremos que fazer isso testando no terminal

function addPets(pets,nome, tipo, raca, idade, genero, vacinado){
    let novoPet ={nome:nome,
    tipo:tipo,
    raca:raca,
    idade:idade,
    genero:genero,
    vacinado:vacinado}
    
    pets.push(novoPet)
    console.log(novoPet)
}

addPets(pets,"Luck","gato","perça",5,"masculino",true)
listaPets(pets)
// desafio 4.1
function cadastrarPet(objetoPet){
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

let novoPet = {
    nome: 'Magaiver',
    tipo: 'macaco',
    raca: 'mico',
    idade: 3,
    genero: 'macho',
    vacinado: false,
    servico: []
  }

let limao = "limao"

cadastrarPet(novoPet)

/* Desafio 5.0 - Criar uma funcao de titulo validaDados que ira validar se o objeto passado como parâmetro
possui todas as propriedades necessárias, que são: nome, tipo, raca, idade, genero e vacinado 
(lembrando que devemos validar a propriedade vacinado para receber apenas valores booleanos - true or false) */

function validaDados(objetoPet){
    return(
    typeof objetoPet.nome === 'string' &&
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' &&
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' &&
    typeof objetoPet.vacinado === 'boolean')
}

novoPet = {
    nome: 'Magaiver',
    tipo: 'macaco',
    raca: 'mico',
    idade: 3,
    genero: 'macho',
    vacinado: false,
    servico: []
  }

//console.log(validaDados(novoPet))


/* Desafio - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: 
dar banho no pet e tosar o pet
sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
servicosPrestados(pets[0].nome, darBanhoNoPet)
servicosPrestados(pets[0].nome, tosarPet)Deveremos executar um aviso dentro das funcoes callback darBanhoNoPet e tosarPet, como o exemplo abaixo:
  console.log(O servico de tomar banho foi realizado com sucesso no pet + yoshi)
  console.log(O servico de tosa foi realizado com sucesso no pet  + yoshi)Terá que ser criada uma nova propriedade dentro de 
  cada pet chamada servicos que armazene todos servicos realizados */

function servicosPrestados(pet, servicoRealizado){
    servicoRealizado(pet)
}

function darBanhoNoPet(pet){
    pet.servico.push("banho");
    let data = new Date()
    console.log(`O pet ${pet.nome} tomou banho na data ${data.getDay()}/${data.getMonth()+1}/${data.getFullYear()}`)
    console.log(pets)
}

function tosarPet(pet){
    pet.servico.push("tosar");
    console.log(`O pet ${pet.nome} foi tosado`)
}

servicosPrestados(pets[0], darBanhoNoPet)

// desafio 1- identificar qual a data que o serviço foi realizado.


/* Desafio - Crie uma função filtrarPetPorNome, que 
quando receber um parâmetro que será uma string
irá filtrar um pet por nome e retorná-lo e senão irá 
retornar que não existe o pet na lista */

function filtraPet(lista, nomePet){
    let petsFiltrados = lista.filter((pet) =>{
        return pet.nome == nomePet
    })

    if(petsFiltrados.length > 0){
        return petsFiltrados
    }else {
        return "Nenhum pet encontrado com o nome" + nomePet
    }
}

console.log(filtraPet(pets,"Yoshi"))
