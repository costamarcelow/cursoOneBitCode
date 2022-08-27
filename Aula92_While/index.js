let warpCount = 0;
let chosenOption = "";

let spaceship = prompt("Digite o nome da nave: ");

chosenOption = prompt("Deseja entrar na dobra espacial? \n 1 - SIM \n 2 - NÃO");

while (chosenOption == 1) {
  warpCount += 1;
  chosenOption = prompt("Deseja realizar a próxima dobra?\n 1 - SIM \n 2- NÃO");
}

alert("A Nave " + spaceship + "\nQntdade de dobras: " + warpCount)
