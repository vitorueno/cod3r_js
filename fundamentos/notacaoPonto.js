// console é um objeto, e acessamos a função log com o ponto
// console.log(typeof console);
// console.log(typeof console.log);

// Math é um objeto e usamos o ponto 
// para acessar as funções dele 
console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // mesma coisa

console.log(obj1.nome);

function Obj(nome) {
    // esse atribuito nome (publico) vai ser associado 
    // ao objeto criado por essa função.
    this.nome = nome // aqui vai ser igual o self. no python
    this.exec = function () {
        console.log('Exec...');
    }
}

// usamos o ponto para acessar os membros (atributos, funções) 
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()