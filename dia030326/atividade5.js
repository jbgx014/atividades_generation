import leia from 'readline-sync';

let codigoproduto = leia.questionInt("Digite o codigo do produto: ");
let quantidade = leia.questionInt("Qual a quantidade? ");
let preco;

switch(codigoproduto) {
    case 1:
        preco = 10;
        console.log(`Produto: Cachorro Quente\n Valor Total: ${quantidade * preco}`);
        break;
    case 2:
        preco = 15;
        console.log(`Produto: X-Salada\n Valor Total: ${quantidade * preco}`);
        break;
    case 3:
        preco = 18;
        console.log(`Produto: X-Bacon\n Valor Total: ${quantidade * preco}`);
        break;
    case 4:
        preco = 12;
        console.log(`Produto: Bauru\n Valor Total: ${quantidade * preco}`);
        break;
    case 5:
        preco = 8;
        console.log(`Produto: Refrigerante\n Valor Total: ${quantidade * preco}`);
        break;
    case 6:
        preco = 13;
        console.log(`Produto: Suco de laranja\n Valor Total: ${quantidade * preco}`);
        break;
    default:
        console.log("Inválido. Tente novamente!")
}
