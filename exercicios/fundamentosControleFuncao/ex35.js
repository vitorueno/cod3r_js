/*
35)​Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha
conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores
contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console.
É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao final
das operações imprima os vetores no console.
*/

function adicionarElementosDeArrayEmPilha(arrayPilha, arrayAdiciona) {
    // easy way, but does not modify the stack 
    // return arrayPilha.concat(arrayAdiciona) 

    for (let i in arrayAdiciona) {
        arrayPilha.push(arrayAdiciona[i])
    }

    return arrayPilha
}

// execução
const arrayPilha = [1, 2, 3, 4, 5]
const arrayAdiciona = [6, 7, 8, 9, 10]
console.log(adicionarElementosDeArrayEmPilha(arrayPilha, arrayAdiciona));

console.log(arrayPilha);