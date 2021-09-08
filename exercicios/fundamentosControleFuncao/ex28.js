/*
28)​Ler um vetor de números inteiros e imprimir quantos são pares e
quantos são ímpares
*/

function qntdNumParesEImparesEmArray(arrayNumeros) {
    let numPares = 0

    for (const i in arrayNumeros) {
        if (ehPar(arrayNumeros[i])) {
            numPares += 1
        }
    }

    const numImpares = arrayNumeros.length - numPares

    return [numPares, numImpares]
}


function ehPar(numero) {
    return (numero % 2) === 0
}


// execução
console.log(qntdNumParesEImparesEmArray([1, 2, 3, 4, 5]))
console.log(qntdNumParesEImparesEmArray([2, 3, 4, 5, 6, 7, 8]))