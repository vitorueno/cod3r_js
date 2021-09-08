/*
38)​Escreva uma função que receba dois parâmetros início e fim. Essa função deve
imprimir todos os números ímpares que estão entre esses valores. Por padrão os
valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos
parâmetros caso a função receba o valor maior antes do menor.
*/

function imprimirImparesDoIntervalo(inicio = 0, fim = 100) {
    if (inicio > fim) { [inicio, fim] = [fim, inicio] }

    let i = ehImpar(inicio) ? inicio : inicio + 1
    for (i; i <= fim; i += 2) {
        console.log(i);
    }

}

function ehImpar(numero) {
    return (numero % 2) !== 0
}


// execução
imprimirImparesDoIntervalo()
console.log();
imprimirImparesDoIntervalo(10, 1)