/*
22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação.
A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - 
fevereiro...) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês 
de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno
deve ser o valor a ser pago para o respectivo mês escolhido
*/

function calcularPrecoAnuidadeComJuros(numMes, valorAnuidade) {
    if (numMes >= 1 && numMes <=12) {
        const anuidadeComJuros = valorAnuidade * ((1.05) ** (numMes-1))
        return anuidadeComJuros.toFixed(2)
    } else {
        return 'Mês inválido'
    }
}

// execução
console.log(calcularPrecoAnuidadeComJuros(1, 100))
console.log(calcularPrecoAnuidadeComJuros(2, 100))
console.log(calcularPrecoAnuidadeComJuros(3, 100))
console.log(calcularPrecoAnuidadeComJuros(4, 100))
console.log(calcularPrecoAnuidadeComJuros(5, 100))
console.log(calcularPrecoAnuidadeComJuros(6, 100))
console.log(calcularPrecoAnuidadeComJuros(7, 100))
console.log(calcularPrecoAnuidadeComJuros(8, 100))
console.log(calcularPrecoAnuidadeComJuros(9, 100))
console.log(calcularPrecoAnuidadeComJuros(10, 100))
console.log(calcularPrecoAnuidadeComJuros(11, 100))
console.log(calcularPrecoAnuidadeComJuros(12, 100))
console.log(calcularPrecoAnuidadeComJuros(1000, 100))