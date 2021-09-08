/*
01)Crie uma função que dado dois valores (passados como parâmetros) mostre no
console a soma, subtração, multiplicação e divisão desses valores.
*/

function operarDoisNumeros(a, b) {
    console.log(`${a} + ${b} = ${a + b}`)
    console.log(`${a} - ${b} = ${a - b}`)
    console.log(`${a} * ${b} = ${a * b}`)
    console.log(`${a} / ${b} = ${a / b}`)
}

// execução
operarDoisNumeros(10, 20)
