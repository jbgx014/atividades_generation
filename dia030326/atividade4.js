import leia from 'readline-sync';

let caracteristica1 = leia.question("Digite a primeira caracteristica (vertebrado ou invertebrado): ");
let caracteristica2 = leia.question("Digite a segunda caracteristica (ave, mamifero, inseto, anelideo) ");
let caracteristica3 = leia.question("Digite a terceira caracteristica (carnivoro, onivoro, herbivoro, hematofago): ");

if (caracteristica1 === "vertebrado" && caracteristica2 === "ave" && caracteristica3 === "carnivoro") {
    console.log("O animal é: Águia");
} else if(caracteristica1 === "vertebrado" && caracteristica2 === "ave" && caracteristica3 === "onivoro"){
    console.log("O animal é: Pomba");
} else if(caracteristica1 === "vertebrado" && caracteristica2 === "mamifero" && caracteristica3 === "onivoro"){
    console.log("O animal é: Homem");
} else if(caracteristica1 === "vertebrado" && caracteristica2 === "mamifero" && caracteristica3 === "herbivoro"){
    console.log("O animal é: Vaca");
} else if(caracteristica1 === "invertebrado" && caracteristica2 === "inseto" && caracteristica3 === "hematofago"){
    console.log("O animal é: Pulga");
} else if(caracteristica1 === "invertebrado" && caracteristica2 === "inseto" && caracteristica3 === "herbivoro"){
    console.log("O animal é: Lagarta");
} else if(caracteristica1 === "invertebrado" && caracteristica2 === "anelideo" && caracteristica3 === "hematofago"){
    console.log("O animal é: Sanguessuga");
} else if(caracteristica1 === "invertebrado" && caracteristica2 === "anelideo" && caracteristica3 === "onivoro"){
    console.log("O animal é: Minhoca");
} else {
    console.log("Características inválidas");
}