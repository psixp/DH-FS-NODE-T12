const json = require("./json");
const { 
  listarPets, 
  cadastrarPet,  
  servicosPrestados,
  darBanhoNoPet,
  tosarPet,
  cadastrarPetsSpreadOperator,
  cadastrarPetsFor,
  filtrarPetPorNome,
  contaVacina,
  removerPet,
} = require("./funcoes-pet");

let pets = [
  {
    id: 1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    id: 2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];

// listarPets(pets)

let novoPet = {
  nome: 'Novo Pet',
  tipo: 'gato',
  raca: 'siames',
  idade: 3,
  genero: 'Fêmea',
  vacinado: false
}

// cadastrarPet(pets, novoPet)

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

// console.log(cadastrarPetsSpreadOperator(pets, json))
// console.log(cadastrarPetsFor(pets, json))

// console.log(filtrarPetPorNome(pets, 'Yoshi'))

// contaVacina(pets)

// removerPet(2, pets)

// code . -> abre no vs code a pasta que estamos navegando


// Desafio 1 - trazer a diferenca de dias e meses entre 15/09/2005 e 15/05/2020
// utilizando biblioteca moment
// Desafio 2 - trazer a diferenca de dias e meses entre 15/09/2005 e 15/05/2020
// utilizando biblioteca date-fns

