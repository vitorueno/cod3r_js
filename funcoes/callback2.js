// quero gerar um novo array com todas as notas menores que 7
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1);

// com callback 
/* filter: retorna os elementos de um array que atendem o critério
da função de callback. Array original não é alterado */
const notasBaixas2 = notas.filter(function (nota)  {
    return nota < 7
})

console.log(notasBaixas2);

// callback com arrow function 
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)