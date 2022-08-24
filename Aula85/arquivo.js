alert ("Bem vindo a Nave!")

let velocity = 0

let pilot = prompt ("Qual o nome do piloto?")
velocity =  prompt ("Qual velocidade Sr. " + pilot + " você gostaria de set? " )
let confirmVelocity = confirm ("Estamos acelerando para " + velocity + " Km/s")

if(confirmVelocity){
    newVelocity = velocity 
}

 if(velocity <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
}else if (velocity < 40){
    alert("Você está devagar, podemos aumentar mais ")
}else if(velocity >= 40 && velocity < 80){
    alert("Parece uma boa aumentar a velocidade")
}else if(velocity >= 80 && velocity < 100){
    alert("Velocidade alta considere diminuir")
}else if (velocity >= 100){
    alert("Velocidade perigosa, Controle automático forçado") 
}

    alert("Caro " + pilot + " sua velocidade esta em " + velocity + " Km/s faça uma boa viagem")
