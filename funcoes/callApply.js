function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// revisando 

// chamando diretamente 
global.preco = 20 
global.desc = 0.1 
// se as variaveis globais não existissem daria NaN
console.log(getPreco()); // usou os valores globais: R$ 18

// chamando a partir do objeto
console.log(produto.getPreco()); // usou os valores do objeto: R$ 3900.65


// call e apply
const carro = {preco: 49990, desc: 0.20}

// usando call
console.log(getPreco.call(carro)); // usou imposto e moeda padrão: R$ 39992 

// usando apply 
console.log(getPreco.apply(carro)); // usou imposto e moeda padrão:  R$ 39992


// no call passamos os parâmetros após informar o contexto (obj carro nesse caso)
console.log(getPreco.call(carro, 0.17, '$')); //$ 46790.64

// no call passamos os parâmetros dentro de um array, após informar o contexto (global aqui)
console.log(getPreco.apply(global, [0.17, '$'])); //$ 21.06