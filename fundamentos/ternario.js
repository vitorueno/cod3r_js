
/*
operador ternario funciona com uma expressão relacional 
o '?' seguido de dois valores divididos por ':'
o primeiro a esquerda do ':' será retornado se a expressão for true
o segundo caso seja falso
*/

// a função é só pra não repetir código
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
/*
// outra opção seria armazenar em variável:
const nota = 8
const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
*/

console.log(resultado(7.1)); // Aprovado
console.log(resultado(6.7)); // Reprovado