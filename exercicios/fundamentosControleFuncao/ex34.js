/*
34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará
True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo)
estejam contidos em ambas palavras.
*/

function palavraContidaNaOutra(palavra1, palavra2) {
    let maior; let menor

    if (palavra1.length >= palavra2.length) {
        maior = palavra1
        menor = palavra2
    } else {
        maior = palavra2
        menor = palavra1
    }

    // using includes function (es 6)
    const contido = maior.includes(menor)

    // using index of substring
    // const contido = maior.indexOf(menor) !== -1

    return contido
}


// execução 
console.log(palavraContidaNaOutra('as', 'passado'));
console.log(palavraContidaNaOutra('presente', 'passado'));
console.log(palavraContidaNaOutra('art', 'earth'));