// tipagem dinâmica: altera o tipo ao longo da execução 

let qualquer = 'legal'
console.log(qualquer);
console.log(typeof qualquer); // string

qualquer = 3.1516 
console.log(qualquer);
console.log(typeof qualquer); // number

// evitar nomes genéricos e siglas:
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso kkk

// código claro ao invés de comentários