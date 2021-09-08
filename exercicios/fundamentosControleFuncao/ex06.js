/*
06)Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, taxaJuros, tempoAplicação) {
    const juros = capitalInicial * taxaJuros * tempoAplicação
    const montante = capitalInicial + juros
    return montante
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicação) {
    const montante = capitalInicial * (1 + taxaJuros) ** tempoAplicação
    return montante
}

// execução
const capitalI = 100
const taxa = 0.2
const tempo = 6

console.log(jurosSimples(capitalI, taxa, tempo).toFixed(2));
console.log(jurosCompostos(capitalI, taxa, tempo).toFixed(2));