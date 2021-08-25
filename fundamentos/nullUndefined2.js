let valor // não inicializada 
// undefined: nunca foi inicializada
console.log(valor); // undefined 

// essa gera erro (não existe), pois não foi criada
// console.log(valor2); 

// não tem nenhum valor e não aponta pra nenhum local de memória
// "vazia"
valor = null 
console.log(valor);

// erro, pois null não tem método toString
// console.log(valor.toString()); 

/*
referencia por endereço faz sentido o null
ex: deixar de apontar pra um objeto apontando pro "nada" 
não é legal atribuir undefined, pois é recomendado 
a linguagem atribuir isso sozinha quando achar necessário
tipo quando a variável não foi inicializada

"zerar variavel"  = atribuir null
*/


const produto = {}
console.log(produto.preco); // undefined: não existe ainda

// erro, pois não da pra ler uma propriedade de algo indefinido
// console.log(produto.preco.a); 

console.log(produto); // {}

produto.preco = 3.50
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco); // falso, pois undefined
console.log(produto); // preco: undefined (não apagou a chave)
// delete produto.preco // para apagar a chave E o valor

// forma explicita de dizer que produto não tem preço 
produto.preco = null
console.log(!!produto.preco); 
console.log(produto.preco);