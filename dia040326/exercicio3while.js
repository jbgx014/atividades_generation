const leia = require('readline-sync');

let idade = 0;
let contadorMenor = 0;
let contadorMaior = 0;

while(idade >= 0){
    idade = leia.questionInt(`Digite uma idade: `);
    
    if(idade < 21){
        contadorMenor++;
    }
    else if(idade > 50){
        contadorMaior++;
    }
}
    console.log(`Total de pessoas menores de 21 anos: ${contadorMenor - 1}`);
    console.log(`Total de pessoas maiores de 50 anos: ${contadorMaior}`);