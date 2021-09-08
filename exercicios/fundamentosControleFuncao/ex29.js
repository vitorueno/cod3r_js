/*
29)​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor
e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo
é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo,
escrevendo estas informações.
*/

function quantosDentroEQuantosForaDoIntervalo(array, intervalo = [10, 20], imprimir = true) {
    let dentro = 0
    let fora = 0
    for (const i in array) {
        if (array[i] >= intervalo[0] && array[i] <= intervalo[1]) {
            dentro++
        } else {
            fora++
        }
    }

    if (imprimir) {
        console.log(`${dentro} números dentro do intervalo e ${fora} fora`);
        console.log(`${array.length} números no total`);
    }

    return [dentro, fora]
}

// execução
quantosDentroEQuantosForaDoIntervalo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 21])