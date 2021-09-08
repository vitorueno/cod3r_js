/*
31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números
negativos há nesse vetore imprime a quantidade no console.
*/

function contarNumerosNegativosDeArray(arrayNumeros, imprimir = true) {
    let negativos = 0
    for (i in arrayNumeros) {
        if (arrayNumeros[i] < 0) {
            negativos++
        }
    }
    if (imprimir) {
        console.log(`O array tem ${negativos} números negativos`)
        console.log(`total de números: ${arrayNumeros.length}`);
    }
    return negativos
}


// execução
contarNumerosNegativosDeArray([1, 2, 3, 4, 5, 7, -1, -2, -3, -4, -5, -6])