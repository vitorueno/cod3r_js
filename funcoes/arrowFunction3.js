let comparaComThis = function (param) {
    // não parece, mas this aqui é o global
    console.log(this === param); 
}

comparaComThis(global) // true 

const obj = {}
comparaComThis = comparaComThis.bind(obj) 

// agora amarrramos o contexto da função com o objeto obj
comparaComThis(global) // false  
comparaComThis(obj) // true  

 
let comparaComThisArrow = param => console.log(this === param)

// na arrow function this não aponta pro global (mais previsivel)
comparaComThisArrow(global) // false

// this vai apontar para o modulo (arquivo) presente  
comparaComThisArrow(module.exports) // true 
comparaComThisArrow(this) // no Node, this é o modulo atual: true

// na luta entre arrow function e bind, quem ganha é a arrow function
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // falso 
comparaComThisArrow(module.exports) // true