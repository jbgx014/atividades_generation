import readlinesync = require("readline-sync");

const numeros: number[] = [2,5,1,3,4,9,7,8,10,6];
let numeroSelecionado;
let contador2 = 0;

numeroSelecionado = readlinesync.questionInt("Digite o numero que voce quer encontrar: ");

for(let contador = 0; contador < 10; contador++){
    if (numeros[contador] == numeroSelecionado){
        console.log(`O numero ${numeroSelecionado} está localizado na posição ${contador}`)
    } else if (numeros[contador] != numeroSelecionado){
        contador2++;
        if (contador2 == 10){
            console.log(`O numero ${numeroSelecionado} nao foi encontrado!`);
        }
    }
}

