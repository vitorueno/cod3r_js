console.log(soma(3,4)); // funciona, pois JS carrega funções antes de ler linhas
// console.log(sub(3,4)); // erro, pois isso não vale para function expression

// function declaration
function soma(x, y) {
    return x + y
}

// function expression 
const sub = function (x, y) {
    return x - y
}

console.log(sub(3,4));

// named function expression 
// forma pouco usada e na maioria das vezes para debugar
const mult = function mult(x, y) {
    return x * y 
}

