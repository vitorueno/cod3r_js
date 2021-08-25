// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// como é um objeto usamos o {} passando os indentificadores 
// e recebendo o objeto
const { nome, idade } = pessoa 

// agora que extrai, a variável nome e idade 
// passaram a existir no programa
console.log(nome, idade);

// não precisa ser com o mesmo nome: n e i passaram 
// a existir com o valor de nome, e idade
const { nome: n, idade: i } = pessoa
console.log(n, i);

// se não existir o atributo no objeto ou ele assume o valor
// padrão (a direita do =) ou undefined
const { sobrenome, bemHumorada = true } = pessoa 
console.log(sobrenome, bemHumorada ); // undefined true

// acessando valores internos
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep);

// isso gera erro, pois a partir de um atributo inexistente
// estamos tentando acessar outros atributos. Undefined não 
// tem ag nem num 
const { conta: { ag, num } } = pessoa 