/*
40)​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos
de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja
atribuído o conceito C, de 7,0 a 8,9 oconceito B e de 9,0 a 10,0 o conceito A.
*/

function classificarNotaEmLetras(nota) {
    if (nota >= 0 && nota <= 4.9) {
        return 'D'
    } else if (nota >= 5 && nota <= 6.9) {
        return 'C'
    } else if (nota >= 7 && nota <= 8.9) {
        return 'B'
    } else if (nota >= 9 && nota <= 10) {
        return 'A'
    } else {
        return 'Nota inválida'
    }
}

// execução
console.log('0', classificarNotaEmLetras(0));
console.log('4.9', classificarNotaEmLetras(4.9));
console.log('5', classificarNotaEmLetras(5));
console.log('6.9', classificarNotaEmLetras(6.9));
console.log('7', classificarNotaEmLetras(7));
console.log('8.9', classificarNotaEmLetras(8.9));
console.log('9', classificarNotaEmLetras(9));
console.log('10', classificarNotaEmLetras(10));
console.log('-50', classificarNotaEmLetras(-50));




