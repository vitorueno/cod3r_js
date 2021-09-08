/*
39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos
de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e
vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.
*/

function trocarElementosDeArrayTamanhosIguais(arrayA, arrayB, imprimir = true) {
    if (arrayA.length !== arrayB.length) {
        return 'Os arrays precisam ter o mesmo tamanho'
    }

    [arrayA, arrayB] = [arrayB, arrayA]

    if (imprimir) {
        console.log(arrayA);
        console.log(arrayB);
    }

    return [arrayA, arrayB]
}

// execução
trocarElementosDeArrayTamanhosIguais([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])