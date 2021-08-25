// espera um array e tenta desestruturá-lo para gerar o min e max
function rand( [ min = 0, max = 1000 ] ) {
    // usando destructuring para alterar a ordem caso 
    // o maximo venha antes do minimo
    //             destructure   criando novo array 
    if (min > max) [ min, max ] = [ max , min ]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

// passando 1° o máximo 
console.log( rand( [ 50, 40 ] ) );

// passando somente um parâmetro (minimo)
console.log( rand( [992] ) );

// passando somente o segundo (máximo)
console.log( rand( [, 10] ) );

// usando array vazio
console.log(rand([]));

// passando nada: gera erro pois tenta desestruturar 
// algo que é undefined
// console.log(rand());
