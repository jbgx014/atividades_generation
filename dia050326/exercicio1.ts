import readlinesync = require("readline-sync");

const cores = new Array<String>(5); 

for(let i = 0; i < cores.length; i++){
    cores[i] = readlinesync.question("Digite uma cor: ");
}

console.log(`\nListar todas as cores:`);
console.log(cores);

console.log(`\nOrdenar as cores:`);
console.log(cores.sort());
