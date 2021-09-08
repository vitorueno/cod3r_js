/*
23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. 
Calcule a média ponderada do aluno, considerando que o peso para a maior nota 
seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, 
a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 
e"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido
seja negativo
*/

function classificarAluno(codAluno, nota1, nota2, nota3) {
    const mediaFinal = calcularMediaPonderada(nota1, nota2, nota3)
    if (mediaFinal >= 5) {
        return `Aluno ${codAluno} aprovado com nota ${mediaFinal.toFixed(2)}`
    } else {
        return `Aluno ${codAluno} reprovado com nota ${mediaFinal.toFixed(2)}`
    }
}

function calcularMediaPonderada(nota1, nota2, nota3, pesoMaiorNota = 4, pesoOutras = 3) {
    const [menor, mediana, maior] = ordenar3Numeros(nota1, nota2, nota3)
    const somaPesos = pesoMaiorNota + (pesoOutras * 2)
    const mediaPonderada = ((maior * pesoMaiorNota) + (mediana * pesoOutras)
        + (menor * pesoOutras)) / somaPesos;
    return mediaPonderada
}

function ordenar3Numeros(num1, num2, num3) {
    const total = num1 + num2 + num3
    const maior = Math.max(num1, num2, num3)
    const menor = Math.min(num1, num2, num3)
    const mediana = total - maior - menor
    return [menor, mediana, maior]
}

// execução
console.log(classificarAluno(1, 4, 5, 6))
console.log(classificarAluno(2, 4, 4, 4))
console.log(classificarAluno(3, 7, 5, 6))


