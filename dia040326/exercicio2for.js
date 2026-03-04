const leia = require('readline-sync');

let numero;
let contadorPar = 0;
let contadorImpar = 0;

for(let contador = 1; contador <= 10; contador++){
    numero = leia.questionInt(`Digite o ${contador}º numero: `);

    if(numero % 2 === 0){
        contadorPar++;
    }
    else if(numero % 2 !== 0){
        contadorImpar++;
    }
}
    console.log(`Total de números pares: ${contadorPar}`);
    console.log(`Total de números ímpares: ${contadorImpar}`);