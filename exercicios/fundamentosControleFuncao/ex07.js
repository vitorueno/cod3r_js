/* 
07)​ Uma das vantagens da programação é a automatização de tarefas que não
gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver
a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, 
“ax2”, “bx” e “c”, de tal modo que na equação: 3x^2 - 5x + 12 os valores seriam 
respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2
valores um para cada possível resultado, mesmo que os resultados sejam iguais.
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. 
*/

function bhaskara(ax, bx, c) {
    const delta = bx ** 2 - 4 * ax * c
    if (delta < 0) { return 'Delta é negativo' }

    const raizes = []
    const raiz1 = (-bx + Math.sqrt(delta)) / (2 * ax)
    const raiz2 = (-bx - Math.sqrt(delta)) / (2 * ax)

    raizes.push(raiz1, raiz2)

    return raizes
}

// execução
console.log(bhaskara(3, 5, 12))
console.log(bhaskara(2, 12, -14))
