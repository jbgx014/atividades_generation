import leia from 'readline-sync';

let numeroA;
let numeroB;
let numeroC;

numeroA = leia.questionInt("Digite o numero A: ");
numeroB = leia.questionInt("Digite o numero B: ");
numeroC = leia.questionInt("Digite o numero C: ");

if((numeroA + numeroB) > numeroC){
    console.log("A Soma de A + B é Maior do que C");
}else if((numeroA + numeroB) < numeroC){
    console.log("A Soma de A + B é Menor do que C");
}else if((numeroA + numeroB) === numeroC){
    console.log("A Soma de A + B é Igual a C");
}
