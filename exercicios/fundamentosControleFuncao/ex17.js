/*
17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

Plano | Aumento
A     |   10%
B     |   15%
C     |   20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e 
calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default 
que indique que o plano é inválido.
*/

function calcularNovoSalario(salarioAtual, novoPlano) {
    switch (novoPlano.toUpperCase()) {
        case 'A':
            return salarioAtual * 1.10
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.20
        default:
            return 'Plano inválido'
    }
}

// execução 
console.log(calcularNovoSalario(1000, 'A'));
console.log(calcularNovoSalario(1000, 'B'));
console.log(calcularNovoSalario(1000, 'C'));
console.log(calcularNovoSalario(1000, 'Z'));

