

let distanceLightYear = prompt("Qual a distância em anos-luz você deseja converter?")

let typeDistenceSelect = prompt("Escolha qual tipo de distância você gostaria converter:\n Parsec(pc)\n Unidade astronônica(au)\n Quilômetros(km)")


let distanceCalc

switch(typeDistenceSelect){
    case "pc":
        alert("Você escolheu a distância em Parsec")
        distanceCalc = distanceLightYear * 0.306601
        alert("A distancia em Parsec é de: " + distanceCalc)
        break
    case "au":
        alert("Você escolheu a distância em Unidade astronônima")
        distanceCalc = distanceLightYear * 63241.1
        alert("A distancia em Unidade Astronônica é de: " + distanceCalc)
       break
    case "km":
        alert("Você escolheu a distância em Quilômetros")
        distanceCalc = distanceLightYear * 9.5 * Math.pow(10, 12)
        alert("A distancia em Quilômetros é de: " + distanceCalc)
        break
    default:
        alert("A opção de distância esta inválida")
        break
}




