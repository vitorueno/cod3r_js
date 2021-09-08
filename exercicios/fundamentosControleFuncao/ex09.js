/*
09)​ Construa uma função para um sistema de notas de uma instituição que possui
a seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100.
Alunos com nota abaixo de 40 são reprovados. As notas possuem a seguinte regra
de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for
menor que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for
abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na
reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota
29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento
eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o
arredondamento é possível pois atingirá 40 e o aluno será aprovado.
*/

function classificarNotaAlunos(nota) {
    const notaArredondada = arredondarNotaComMultiplosDe5(nota)
    if (notaArredondada >= 40) {
        return `Aprovado(a) com nota ${notaArredondada}`
    } else {
        return `reprovado(a) com nota ${notaArredondada}`
    }
}

function arredondarNotaComMultiplosDe5(nota) {
    const diffProximoMultiploDe5 = 5 - (nota % 5)
    const notaComDiferenca = nota + diffProximoMultiploDe5

    if ((diffProximoMultiploDe5 < 3) && (nota >= 38)) {
        return notaComDiferenca
    }   

    return nota
}

// execução
console.log(classificarNotaAlunos(38))
console.log(classificarNotaAlunos(29))
console.log(classificarNotaAlunos(84))
console.log(classificarNotaAlunos(81))
console.log(classificarNotaAlunos(82))