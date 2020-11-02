const moment =require("moment")
const {differenceInDays, differenceInMonths} = require("date-fns") // desestruturando

moment.locale('pt-br')
let final = moment([2005, 09, 15])
let inicio = moment([2020, 05, 15])
console.log('a Difenreça de dias e meses das datas 15/09/2005 a 15/05/2020 é:')
console.log(`${inicio.diff(final, 'days')} dias e ${inicio.diff(final, 'months')} meses`)


// let dataAntigaFNS = new Date(2005, 09-1, 15)
// let dataAtualFNS = new Date(2020, 05-1, 15)
// let diasDeDiferencaFNS = differenceInDays(dataAtualFNS, dataAntigaFNS)
// let mesesDeDiferencaFNS = differenceInMonths(dataAtualFNS, dataAntigaFNS)
// console.log(`A diferença em dias entre ../../.. e ../../.. é: ${diasDeDiferencaFNS}`)
// console.log(`A diferença em dias entre ../../.. e ../../.. é: ${mesesDeDiferencaFNS}`)

// console.log(dataAntigaFNS)
// console.log(dataAtualFNS)