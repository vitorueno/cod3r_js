/* ATRIBUIÇÃO POR REFERÊNCIA */

// constante a tem o endereço que aponta para o objeto
const a = { name: 'teste' } 
console.log(a);

// constante b é o mesmo endereço que o a aponta
const b = a 
console.log(b);

// a prova disso é alterar o atributo name
b.name = 'Opa'
console.log(a); // a também foi atualizado


/* atribuição por valor */

let c = 3 
let d = c // cópia do valor, não do objeto pois é um tipo primitivo

d++ // alterei o d, mas não o c
console.log(d); // 4 
console.log(c); // 3 -> diferente do d