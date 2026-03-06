import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>();
let continuar: boolean = true;

do {
let menu: string = ("\n1 - Adicionar livro na pilha \n2 - Listar todos os livros\n3 - Retirar livro da pilha\n0 - Sair");
console.log(menu);
let opcao: number = readlinesync.questionInt("Digite a opcao desejada: ");

switch (opcao) {
  case 1:
    let nome: string = readlinesync.question("Digite o nome: ");
    pilha.push(nome);
    console.log("Pilha:");
    pilha.printStack();
    console.log("Livro adicionado!");
    break;
  case 2:
    console.log("Lista de livros na pilha: ");
    pilha.printStack();
    if (pilha.isEmpty()) {
      console.log("A pilha está vazia!");
    }
    break;
  case 3:
    pilha.pop();
    pilha.printStack();
    if (pilha.isEmpty()) {
      console.log("A pilha está vazia!");
    } else {
        console.log("O livro foi retirado da pilha!");
    }
    break;
  case 0:
    continuar = false;
    console.log("Programa finalizado!");
    break;
  default:
    console.log("Opção inválida");
    break;
}
}while(continuar);




/*
pilha.push("");
pilha.push("");
pilha.push("");

pilha.printStack(); //metodo de impressao dessa classe
*/