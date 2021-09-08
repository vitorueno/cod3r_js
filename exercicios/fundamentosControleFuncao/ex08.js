/*
08) ​ Pedro joga N jogos de basquete por temporada. Para saber como está ele
está progredindo, ele mantém registro de todos os as pontuações feitas por jogo.
Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que
seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores
um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde
de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).

Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor 
pontuação e a pior pontuação aconteceu no sétimo jogo.)
*/

function numeroRecordsEPiorJogo(stringRegistroJogos) {
    // map para transformar em Number
    const arrayRegistro = stringRegistroJogos.split(' ').map(Number)

    let indicePiorJogo = 0
    let pontuacaoPiorJogo = arrayRegistro[0]
    let pontuacaoRecord = arrayRegistro[0]
    let qntdRecords = 0
    let pontuacaoJogoAtual

    for (let i = 1; i < arrayRegistro.length; i++) {
        pontuacaoJogoAtual = arrayRegistro[i]

        if (pontuacaoJogoAtual > pontuacaoRecord) {
            pontuacaoRecord = pontuacaoJogoAtual
            qntdRecords++
        }

        if (pontuacaoJogoAtual < pontuacaoPiorJogo) {
            pontuacaoPiorJogo = pontuacaoJogoAtual
            indicePiorJogo = i
        }
    }

    const numPiorJogo = ++indicePiorJogo
    return [qntdRecords, numPiorJogo]
}

// execução
console.log(numeroRecordsEPiorJogo('10 20 20 8 25 3 0 30 1'))