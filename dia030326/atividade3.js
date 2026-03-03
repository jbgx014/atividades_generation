import leia from 'readline-sync';

let nome = leia.question("Digite o nome do doador: ");
let idade = leia.questionInt("Digite a idade do doador: ");
let primeiradoacao = leia.keyInYN("Primeira doação de sangue? ");

if(idade >= 18 && idade <=59){
    console.log(`${nome} está apto(a) para doar sangue!`);
}else if((idade >=60 && idade<=69) && primeiradoacao){
    console.log(`${nome} não está apto(a) para doar sangue!`);
} else if((idade >=60 && idade<=69) && !primeiradoacao){
    console.log(`${nome} está apto(a) para doar sangue!`);
} else {
    console.log(`${nome} não está apto(a) para doar sangue!`);
}


