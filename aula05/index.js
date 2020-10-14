const json = require("./json")



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

// let listaPets = (listaPets) =>{
//     let cont = 0
//     for(let i in listaPets){
//       cont ++
//       console.log(`\n nome do pet:  ${listaPets[i].nome}\n Tipo do Pet: ${listaPets[i].tipo}`)
//     }
//     console.log(` Total de pets: ${cont}`)
//   }

// 2.0

const listaPets = pets =>{
    pets.forEach((pet) =>{
        console.log(`Nome: ${pet.nome}\nTipo:${pet.tipo}`)
    })
    console.log("Temos o total de " + pets.length + " no sistema")
}
  
//listaPets(pets)

let servicosPrestados = (pet, servicoRealizado) =>{
    servicoRealizado(pet)
}


let cadastrarPet = (objetoPet) =>{
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

let darBanhoNoPet = (pet) =>{
    pet.servicos.push("banho");
    let data = new Date()
    console.log(`O pet ${pet.nome} tomou banho na data ${data.getDay()}/${data.getMonth()+1}/${data.getFullYear()}`)
}

let tosarPet = (pet) =>{
    pet.servicos.push("tosar");
    console.log(`O pet ${pet.nome} foi tosado`)
}

//servicosPrestados(pets[0], darBanhoNoPet)

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

//console.log(filtraPet(pets,"Yoshi"))

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

//contaVacina(pets)


// Criar uma funcao removerPet que ao receber dois parametros
//  (sendo o primeiro o ID do pet, e, o segundo 
//     a lista na qual queremos remover um pet). 
//     Deveremos reconhecer o pet e excluí-lo, caso o ID passado, não
//     seja encontrado na lista de pets, iremos retornar uma mensagem 
//     do tipo: "Nao encontramos nenhum pet com o id " + idPet
    
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

removerPet(2, pets)

