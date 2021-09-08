/*
33)​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes
vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo
com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função
de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado
no console. Todos os elementos do vetor resultado deverão aparecer no console
*/

function unirArrays(array1, array2) {
    const novoArray = array1.concat(array2)
    console.log(novoArray);
}

// execução
const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['um', 'dois', 'três', 'quatro']
const vetorDouble = [1.1, 2.2, 3.3, 4.4]

unirArrays(vetorInteiro, vetorDouble)
unirArrays(vetorString, vetorInteiro)