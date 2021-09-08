/*
36)​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos
e um número inteiro. Faça com que a primeira função retorne outro vetor que será
resultado da multiplicação de cada elemento pelo número passado como parâmetro.
A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior
que 5.
*/

function multiplarArrayPorNumero(arrayNumerico, numeroMultiplicador) {
    for (let i in arrayNumerico) {
        arrayNumerico[i] = arrayNumerico[i] * numeroMultiplicador
    }
    return arrayNumerico
}

function multiplicarElementosMaioresQueXPorN(arrayNumerico, N, X = 5) {
    for (let i in arrayNumerico) {
        if (arrayNumerico[i] > X) {
            arrayNumerico[i] = arrayNumerico[i] * N
        }
    }
    return arrayNumerico
}

// execução
let arrayTeste = [1, 2, 3, 4, 5, 6]
console.log('original:', arrayTeste);
console.log(multiplicarElementosMaioresQueXPorN(arrayTeste, 2));
console.log(multiplarArrayPorNumero(arrayTeste, 2));
