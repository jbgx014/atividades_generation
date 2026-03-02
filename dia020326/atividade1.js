let salario;
let abono;
let novoSalario;

const leia = require('readline-sync');

salario = leia.questionFloat("Digite o salario: ");
abono = leia.questionFloat("Digite o abono: ");

novoSalario = salario + abono;

console.log("O novo salário é: " + novoSalario);