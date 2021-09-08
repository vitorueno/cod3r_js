/*
37)​Escreva duas funções, uma para progressão aritmética e uma para progressão 
geométrica que recebam como parâmetros um número n (número de termo), ​a1​ 
(o primeiro termo) e ​r (a razão) e escreva os ​n​ termos, bem como a soma 
dos elementos.
*/

function progressaoAritmetica(n, a1, r, imprimir = true) {
    const ultimoTermo = a1 + (n - 1) * r // formula do termo geral
    const soma = ((a1 + ultimoTermo) * n) / 2

    const termosProgressao = []

    for (let i = a1; i <= ultimoTermo; i += r) {
        termosProgressao.push(i)
    }

    if (imprimir) {
        console.log('Soma:', soma);
        console.log('Termos da progressão:', termosProgressao);
    }

    return [termosProgressao, soma]
}

function progressaoGeometrica(n, a1, r, imprimir = true) {
    const ultimoTermo = a1 * (r ** (n - 1))
    const soma = (a1 * ((r ** (n)) - 1)) / (r - 1)

    const termosProgressao = []

    for (let i = a1; i <= ultimoTermo; i *= r) {
        termosProgressao.push(i)
    }

    if (imprimir) {
        console.log('Soma:', soma);
        console.log('Termos da progressão:', termosProgressao);
    }

    return [termosProgressao, soma]
}

// execução
progressaoAritmetica(10, 1, 2)
progressaoGeometrica(10, 1, 2)