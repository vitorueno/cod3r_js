let a = 3 

global.b = 123
this.c = 456
this.d = false 
this.e = 'teste'

console.log(a); // 3 -> normal
console.log(this.a); // undefined
console.log(global.a); // undefined

console.log(global.b); // 123
console.log(this.c); // 456

console.log(module.exports.c); // 456
console.log(module.exports === this); // true
console.log(module.exports); // { c: 456, d: false, e: 'teste' }

/*
// pessoas estão mais acostumadas a exportar coisas com 

module.exports = { c: 456, d: false, e: 'teste' }
*/ 

// criando uma variavel maluca: sem var e let
// ela será colocada no global
abc = 'abc' // não fazer isso
console.log(global.abc); // 'abc'

// moral da história 
// conheça o runtime para usar o JS da melhor forma possível