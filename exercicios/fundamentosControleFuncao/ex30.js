/* 
30)​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior
e menor valor dentro do vetor. 
*/

function maiorEMenorNumeroDentroDeArray(arrayNumeros) {
    let maior = arrayNumeros[0]
    let menor = arrayNumeros[1]
    for (const i in arrayNumeros) {
        if (arrayNumeros[i] < menor) { menor = arrayNumeros[i] }
        if (arrayNumeros[i] > maior) { maior = arrayNumeros[i] }
    }

    return [maior, menor]
}

// execução
console.log(maiorEMenorNumeroDentroDeArray([1, 2, 3, 4, 5, 5, 7, 6, 8, 10, -50]))