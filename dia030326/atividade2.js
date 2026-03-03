import leia from 'readline-sync';

let numero = leia.questionInt("Digite um numero: ");

if(numero > 0 && (numero % 2 === 0)){
    console.log("O numero é positivo e é par");
}else if(numero < 0 && (numero % 2 === 0)){
    console.log("O numero é negativo e é par");
}else if(numero > 0 && (numero % 2 !== 0)){
    console.log("O numero é positivo e é ímpar");
}else if(numero < 0 && (numero % 2 !== 0)){
    console.log("O numero é negativo e é ímpar");
}else{
    console.log("O numero é neutro");
}
