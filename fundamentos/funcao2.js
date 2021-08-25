// armazenar função em variável
const imprimirSoma = function (a, b) {
    console.log(a+b);
}

imprimirSoma(2,3)

// armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3));

// retorno implicito em arrow function
/* não usar chaver (implica que tenha uma linha 
e que ela seja retornada, mesmo que undefined)*/
const subtracao = (a,b) => a-b
console.log(subtracao(2,3)); // -1

// se tiver um parametro não precisa nem de parentesis
const imprimir2 = a => console.log(a)
b = imprimir2('legal')
console.log(b); // o valor retornado é undefined nesse caso