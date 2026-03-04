const leia = require('readline-sync');

let numero1, numero2;
let contador;

numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
numero2 = leia.questionInt("Digite o ultimo numero do intervalo: ");

if(numero1 > numero2){
    console.log("Intervalo inválido!");
}

else{
for(contador = numero1; contador <= numero2; contador++){
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log(`${contador} é múltiplo de 3 e 5`)
    }
}
}
