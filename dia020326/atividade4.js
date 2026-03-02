let numero1;
let numero2;
let numero3;
let numero4;
let diferenca;

const leia = require('readline-sync');

numero1 = leia.questionFloat("Digite o primeiro numero: ");
numero2 = leia.questionFloat("Digite o segundo numero: ");
numero3 = leia.questionFloat("Digite o terceiro numero: ");
numero4 = leia.questionFloat("Digite o quarto numero: ");

diferenca = (numero1 * numero2) - (numero3 * numero4)

console.log("A diferença é: " + diferenca);
