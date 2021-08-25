console.log(7 / 0) // infinity
console.log('10' / 2) // 5
console.log('10sadgsda' / 2) // NaN
console.log('Show' * 2) // Nan :C 
console.log(0.1 + 0.7) // 0.799999

// console.log(10.toString()); // não funciona

console.log((10.345).toFixed(2)); // não precisa passar uma var

/*
 Não é 0.8 pois essa especificação seria muito mais lento. A maioria das linguagens segue isso. 
*/ 

// string vai ter preferencia na soma (concatenar)
console.log('3' + 2); // vai concatenar ao invés de somar
console.log('3' - 2 ); // não existe subtração de strings então fez subtração
