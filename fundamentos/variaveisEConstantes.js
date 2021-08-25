var a = 3
let b = 4 

// é possível redeclarar com var; não há motivo para fazer isso
var a = 30 
b = 40 // o mesmo não acontece com let

console.log(a, b);

a = 300 
b = 400 

console.log(a, b);

const c = 5; 
// c = 50 // erro: valor não pode ser alterado com constante 