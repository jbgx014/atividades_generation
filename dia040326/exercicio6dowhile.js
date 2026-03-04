const leia = require('readline-sync');

let contador = 0;
let somaNumeros = 0;

do{
    numero = leia.questionInt("Digite um numero: ");
    if(numero % 3 === 0){
        contador++;
        somaNumeros = somaNumeros + numero;
    }

}while(numero !== 0)

contador--;
console.log(`A média de todos os números múltiplos de 3 é: ${somaNumeros/contador}`)