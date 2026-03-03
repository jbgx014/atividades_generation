import leia from 'readline-sync';

console.log("\nCódigos das operações: \n1- Saldo\n2- Saque\n3- Depósito\n");

let codigoOperacao = leia.questionInt("Digite o codigo da operacao: ");


let saldo = 1000;

switch(codigoOperacao) {
    case 1:
        console.log(`Operação - Saldo\nSaldo: R$ ${saldo}`);
        break;
    case 2:
        let valorSaque = leia.questionFloat("Digite o valor do saque: ");
        if(valorSaque < saldo){
            console.log(`Operação - Saque\nNovo Saldo: R$ ${saldo - valorSaque}`);
        }else {
        console.log(`Operação - Saque\nSaldo insuficiente`);
        }
        break;
    case 3:
        let valorDeposito = leia.questionFloat("Digite o valor do deposito: ");
        console.log(`Operação - Depósito\nNovo Saldo: R$ ${saldo + valorDeposito}`);
        break;
    default:
        console.log(`Operação inválida`);
        break;
}