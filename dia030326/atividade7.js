import leia from 'readline-sync';

let numero1 = leia.questionFloat("Digite o primeiro numero: ");
let numero2 = leia.questionFloat("Digite o segundo numero: ");
console.log("\n Códigos das operacoes: \n1- Soma\n2- Subtracao\n3- Multiplicacao\n4- Divisao\n")
let codigoOperacao = leia.questionInt("Digite o codigo da operacao: ");

switch(codigoOperacao) {
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    case 4:
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    default:
        console.log(`Operação inválida`);
        break;
}
