/* 
24)​ Crie um programa que imprima 11 vezes a frase " Hello World!" 
utilizando uma estrutura de repetição while. 
*/

function imprimirMensagemNVezes(mensagem, qntdVezes) {
    let count = 0
    while (count < qntdVezes) {
        console.log(count + 1, '-', mensagem)
        count++
    }
}

// execução 
imprimirMensagemNVezes('Hello, World!', 11)