let nome = 'Pet Shop NodeJS DH'

console.log(nome)

// array
let array = ['Leão', 'Cavalo', 'Cachorro']

//objeto
let pessoa = {
    nome:"Pablo",
    idade: 25
}

// for(let item in pessoa){
//     console.log("propriedade: " + item + "valor da propriedade "+ pessoa[item])
// }

// for (let i = 0; i < array.length; i++){
//     console.log(`${i+1}- ${array[i]}`)
// }

// Desafio 3 - Criar uma função que percorra a lista de pets e
// listar a seguinte mensagem para cada pet "Nome: nome Do Pet" 
// e também uma mensagem para o tipo para cada pet "Tipo: tipo Do Pet"
// E por fim, retornar uma mensagem contendo a quantidade total de 
// pets cadastrados no nosso sistema


let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false
    }
  ];


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