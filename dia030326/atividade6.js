import leia from 'readline-sync';

let nome = leia.question("Digite o seu nome: ");
let codigoCargo = leia.questionInt("Digite o codigo do seu cargo: ");
let salario = leia.questionFloat("Digite o seu salario: ");

let reajuste;

switch(codigoCargo) {
    case 1:
        reajuste = 0.1;
        console.log(`Nome do colaborador: ${nome}\n Cargo: Gerente\n Salário reajustado: ${salario + (reajuste * salario)}`);
        break;
    case 2:
        reajuste = 0.07;
        console.log(`Nome do colaborador: ${nome}\n Cargo: Vendedor\n Salário reajustado: ${salario + (reajuste * salario)}`);
        break;
    case 3:
        reajuste = 0.09;
        console.log(`Nome do colaborador: ${nome}\n Cargo: Supervisor\n Salário reajustado: ${salario + (reajuste * salario)}`);
        break;
    case 4:
        reajuste = 0.06;
        console.log(`Nome do colaborador: ${nome}\n Cargo: Motorista\n Salário reajustado: ${salario + (reajuste * salario)}`);
        break;
    case 5:
        reajuste = 0.05;
        console.log(`Nome do colaborador: ${nome}\n Cargo: Estoquista\n Salário reajustado: ${salario + (reajuste * salario)}`);
        break;
    case 6:
        reajuste = 0.08;
        console.log(`Nome do colaborador: ${nome}\n Cargo: Técnico de TI\n Salário reajustado: ${salario + (reajuste * salario)}`);
        break;
    default:
        console.log("Inválido. Tente novamente!");
}