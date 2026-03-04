const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numeroEscolhido;
let contador;
let contador2 = 0;

numeroEscolhido = leia.question("Digite o numero que voce quer encontrar: ");

for (contador = 0; contador < 10; contador++) {
  if (numeroEscolhido == vetor[contador]) {
    console.log(
      `O número ${numeroEscolhido} está localizado na posição: ${contador}`,
    );
    break;
  }
  if (numeroEscolhido != vetor[contador]) {
    contador2++;
    if (contador2 === 10) {
      console.log(`O número ${numeroEscolhido} não foi encontrado!`);
    }
  }
}
