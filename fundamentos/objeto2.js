// tipo de Object
console.log(typeof Object); // function

// instânciando: uma função gera um objeto (chamando o construtor)
console.log(typeof new Object); // object

const Cliente = function () {} 

console.log(typeof Cliente); // function
console.log(typeof new Cliente); // object

/*como vimos, classe é uma forma diferente
 de escrever uma função*/
class Produto {} // ES 2015 (ES6)


console.log(typeof Produto); // function

// nesse caso parentesis em Produto é opcional
console.log(typeof new Produto()); // object
