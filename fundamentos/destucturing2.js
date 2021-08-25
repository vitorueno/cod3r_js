const [a] = [10]
console.log(a);

// é possível pular posições, usando virgula 
const [ n1, , n3, ,n5, n6=0 ] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6); // 10 9 undefined, 0 (valor padrão)

// ignora o primeiro elemento, o segundo é um array
// ignora o primeiro elemento do subarray e pega o segundo
const [, [, nota] ] = [[,8,8], [9,6,8] ]
console.log(nota); // 6