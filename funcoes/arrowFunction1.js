let dobro = function (a) {
    return 2 * a
}

// arrow function é sempre anonima
dobro = (a) => {
    return 2*a 
}

// com um só parâmetro: pode omitir o ()
// com uma só sentença de código retornando: omitir o {} (retorno implicito)
dobro = a => 2*a // retorno implicito
console.log(dobro(Math.PI)); // 6.283185307179586

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'

/*
// outra opção é usar um parâmetro inutil que não será passado ou usado
// o parâmetro existe
ola = _ => 'Olá'
*/

console.log(ola());