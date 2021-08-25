// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3) // 5
imprimirSoma(2) // 2 + undefined = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // não reclama: 12
imprimirSoma() // NaN


// função com retorno

// valor padrão -> igual python
function soma(a, b=1) {
    return a + b
}

// obviamente, como a função não imprime no terminal
// precisamos imprimir fora dela  
console.log(soma(2,3)); // 5
console.log(soma(2));  // 3, pois usou o valor padrão de b
console.log(soma()); // NaN: undefined + 1 

