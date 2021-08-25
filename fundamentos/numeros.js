const peso1 = 1.0
// converter string para número
const peso2 = Number('2.0')

console.log(peso1, peso2);

// retorna true, pois é .0 
console.log(Number.isInteger(peso1)); // true
console.log(Number.isInteger(peso2)); // true

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2 
const media = total / (peso1 + peso2)

// toFixed para arredondar: não altera o valor da variável
console.log(media.toFixed(2)); // 7.87

// converter número para string
console.log(media.toString()); // '7.87099..'

// converter número para string com binário
console.log(media.toString(2)); // 111...

console.log(typeof media); // number: não alterou o tipo 

/*
    number = tipo numérico
    Number = função 
*/ 