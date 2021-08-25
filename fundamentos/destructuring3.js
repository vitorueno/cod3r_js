// isso significa que vamos receber um objeto como parâmetro
// e vamos desestruturalo de forma que tenhamos uma variável
// min e outra max para não precisar acessar com o '.'
function rand( { min=0, max=1000 } ) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// passando um objeto inteiro
const obj = {max: 50, min: 40}
console.log(rand( obj ));

// passando apenas um dos parâmetros
// max assume o valor padrão 1000
console.log(rand( { min:100 } )); 

// passar objeto vazio: usar os dois valores padrão
console.log(rand({}));

// passar nada: erro, pois ele tenta 
// desestruturar algo que não existe
console.log(rand());

// aqui temos um {} como valor padrão, então 
// o exemplo acima não teria erro
/*
function rand( { min=0, max=1000 } = {} ) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
*/