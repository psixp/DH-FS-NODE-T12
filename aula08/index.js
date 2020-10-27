const json = require("./json")
const {
    listaPets,
    cadastrarPet,
    servicosPrestados,
    darBanhoNoPet,
    tosarPet,
    contaVacina,
    removerPet
} = require("./funcoes-pet")


let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true,
      servicos: [],
      id: 1
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false,
      servicos: [],
      id: 2
    },
    {
      nome: 'Panda',
      tipo: 'urso',
      raca: 'panda',
      idade: 3,
      genero: 'macho',
      vacinado: false,
      servicos: [],
      id: 3
    },
    {
      nome: 'Pipiu',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false,
      servicos: [],
      id: 4
    }
  ];



novoPet = {
    nome: 'Magaiver',
    tipo: 'macaco',
    raca: 'mico',
    idade: 3,
    genero: 'macho',
    vacinado: false,
    servico: []
  }

//listaPets(pets)
//cadastrarPet(pets, novoPet) 
servicosPrestados(pets[1], darBanhoNoPet)
//darBanhoNoPet('Magaiver')
//console.log(filtraPet(pets,"Yoshi"))
//contaVacina(pets)    
//removerPet(2, pets)
//console.log(funcoesPet.filtraPet(pets, 'Yoshi'))



// code . -> abre no vs code a pasta que estamos navegando


// Desafio 1 - trazer a diferenca de dias e meses entre 15/09/2005 e 15/05/2020
// utilizando biblioteca moment
// Desafio 2 - trazer a diferenca de dias e meses entre 15/09/2005 e 15/05/2020
// utilizando biblioteca date-fns

