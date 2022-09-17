let nameSpaceship = prompt ("Qual o nome da sua nave?")

let letraAtual = prompt ("Qual letra atual vc deseja substituir?")

let letraNova = prompt ("Qual letra NOVA vc seja colocar?")

let newSpaceship = ""


for(let i = 0; i < nameSpaceship.length; i++){
    if(nameSpaceship[i] == letraAtual){
        newSpaceship += letraNova
    }else {
        newSpaceship += nameSpaceship [i]
    }
}

alert (newSpaceship)
