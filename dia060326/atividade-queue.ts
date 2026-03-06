import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();
let continuar: boolean = true;

do {

let menu: string = ("\n1 - Adicionar um novo Cliente na fila \n2 - Listar todos os clientes \n3 - Retirar cliente da fila \n0 - Sair");
console.log(menu);
let opcao: number = readlinesync.questionInt("Digite a opcao desejada: ");

switch (opcao) {
  case 1:
    let nome: string = readlinesync.question("Digite o nome: ");
    fila.enqueue(nome);
    console.log("Fila:");
    fila.printQueue();
    console.log("Cliente adicionado!");
    break;
  case 2:
    console.log("Lista de clientes na fila: ");
    fila.printQueue();
    if (fila.isEmpty()) {
      console.log("A fila está vazia!");
    }
    break;
  case 3:
    fila.dequeue();
    fila.printQueue();
    if (fila.isEmpty()) {
      console.log("A fila está vazia!");
    } else {
        console.log("O cliente foi chamado!");
    }
    break;
  case 0:
    continuar = false;
    break;
  default:
    console.log("Opção inválida");
    break;
}
}while(continuar);

