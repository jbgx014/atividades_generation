const leia = require('readline-sync');

let continuar = true;
let idade = 0;
let identidadeGenero = 0;
let pessoaDesenvolvedora = 0;
let contadorPessoasDev = 0;
let contadorMulherFront = 0;
let contadorHomensMobile40 = 0;
let contadorNaoBinarioFullstack30 = 0;
let contadorRespondentes = 0;
let somaIdade = 0;

while(continuar){
    contadorRespondentes++;
    idade = leia.questionInt("Digite a idade: ");
    somaIdade = somaIdade + idade;
    console.log("Codigos para identidade de genero: 1 – Mulher Cis | 2 – Homem Cis | 3 – Não Binario | 4 – Mulher Trans | 5 – Homem Trans | 6 – Outros");
    identidadeGenero = leia.questionInt("Digite o codigo da identidade de genero: ");
    console.log("Codigos Pessoa Desenvolvedora: 1 – Backend | 2 – Frontend | 3 – Mobile | 4 – FullStack");
    pessoaDesenvolvedora = leia.questionInt("Digite o codigo da pessoa desenvolvedora: ");
    continuar = leia.keyInYN("Deseja inserir os dados de outro colaborador? Digite Y para sim e N para nao: ");

    if(pessoaDesenvolvedora == 1){
        contadorPessoasDev++;
    }
    
    if((identidadeGenero == 1 || identidadeGenero == 4) && pessoaDesenvolvedora == 2) {
        contadorMulherFront++;
    }

    if((identidadeGenero == 2 || identidadeGenero == 5) && pessoaDesenvolvedora == 3 && idade > 40){
        contadorHomensMobile40++;
    }

    if(identidadeGenero == 3 && pessoaDesenvolvedora == 4 && idade < 30){
        contadorNaoBinarioFullstack30++;
    }
    
}

console.log(`Total de pessoas desenvolvedoras Backend: ${contadorPessoasDev}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${contadorMulherFront}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${contadorHomensMobile40}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${contadorNaoBinarioFullstack30}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${contadorRespondentes}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${somaIdade/contadorRespondentes}`);


