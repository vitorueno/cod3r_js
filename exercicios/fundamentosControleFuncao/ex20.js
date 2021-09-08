/*
20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo 
de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50,
R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao 
solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram
exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s)
de R$ 1.
*/

function mostrarQntdMinimaDeCadaNota(valor) {
    let qntdNotaAtual
    let valorAtualizado = valor 
    let stringMensagem = ''
    const notas = [100, 50, 10, 5, 1]

    for (let i in notas) {
        if ( valorAtualizado === 0 ) { break }  
        [ qntdNotaAtual, valorAtualizado ] = calcularQntdMinimoDeNotas(valorAtualizado, notas[i]) 
        if (qntdNotaAtual > 0) { 
            stringMensagem += `${qntdNotaAtual} nota(s) de R$ ${notas[i]}. `
        }
    }

    return stringMensagem
}

function calcularQntdMinimoDeNotas(valor, nota) {
    const qntdNota = parseInt(valor / nota)
    const valorAtualizado = valor - (nota * qntdNota)
    return [ qntdNota, valorAtualizado ]
}

// execução
console.log(mostrarQntdMinimaDeCadaNota(18))