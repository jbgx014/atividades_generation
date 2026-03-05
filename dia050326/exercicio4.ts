import readlinesync = require("readline-sync");

const numeros = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

let numeroSelecionado: number = readlinesync.questionInt("Digite o numero que voce quer encontrar: ");

let contador: number = 0;

for (let i: number = 0; i < 10; i++){
    if(Array.from(numeros)[i] == numeroSelecionado){
        console.log(`Numero ${numeroSelecionado} encontrado na posição ${i}`);
    } else if (Array.from(numeros)[i] != numeroSelecionado) {
        contador++;
        if (contador == 10){
            console.log(`O numero ${numeroSelecionado} nao foi encontrado!`);
        }
    }
}
// console.log(Array.from(numeros)[i]); --- > no set não conseguimos pegar direto o numero numa posição, precisa converter em array