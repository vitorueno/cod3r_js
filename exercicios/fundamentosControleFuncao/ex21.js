/*
21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada 
a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme 
a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; 
4) conveniados acima de 60 anos pagam R$130
*/

function calcularPrecoPlanoDeSaude(idade) {
    let precoTotal = 100
    if (idade > 0 && idade < 10) {
        precoTotal += 80
    } else if (idade >= 10 && idade <= 30) {
        precoTotal += 50
    } else if (idade > 30 && idade <= 60) {
        precoTotal += 95
    } else if (idade > 60) {
        precoTotal += 130
    } else {
        return 'Idade inválida'
    }
    
    return precoTotal
}

// execução
console.log('-1', calcularPrecoPlanoDeSaude(-1));
console.log('9', calcularPrecoPlanoDeSaude(9));
console.log('10', calcularPrecoPlanoDeSaude(10));
console.log('30', calcularPrecoPlanoDeSaude(30));
console.log('31', calcularPrecoPlanoDeSaude(31));
console.log('60',calcularPrecoPlanoDeSaude(60));
console.log('64',calcularPrecoPlanoDeSaude(64));
console.log('10000',calcularPrecoPlanoDeSaude(10000));
