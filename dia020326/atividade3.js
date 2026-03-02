let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

const leia = require('readline-sync');

salarioBruto = leia.questionFloat("Digite o salario bruto: ");
adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ");
horasExtras = leia.questionFloat("Digite as horas extras: ");
descontos = leia.questionFloat("Digite os descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("O salário líquido é: " + salarioLiquido);