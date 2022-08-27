let departureDateEntry = prompt ("Digite a date de partida (formato dd/mm/aaaa")

let departureDate = moment(departureDateEntry, "DD/MM/AAAA")

let today = moment()

let dateDiff = today - departureDate

let chooseOption = prompt ("Escolha como gostaria de exibir o tempo de partida \n 1 - Segundos \n 2 - Minutos \n 3- Horas \n 4 - Dias")

if(chooseOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo " + secondsOfDeparture + " segundos")
}else if(chooseOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo " + minutesOfDeparture + " Minutos")
}else if(chooseOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo " + hoursOfDeparture + " Horas")
}else if(chooseOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo " + daysOfDeparture + " Dias")
}else{
    alert("Opção inválida")
}