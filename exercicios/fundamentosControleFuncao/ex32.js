/*
32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor
de inteiros
*/

function mediaAritmeticaDeArray(arrayNumeros) {
    let soma = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        soma += arrayNumeros[i]
    }

    const tamanhoArray = arrayNumeros.length
    const mediaAritmetica = soma / tamanhoArray
    return mediaAritmetica
}

// execução
console.log(mediaAritmeticaDeArray([10, 10, 10]));
console.log(mediaAritmeticaDeArray([7, 8, 9]));
console.log(mediaAritmeticaDeArray([1, 2, 3, 4, 5]));