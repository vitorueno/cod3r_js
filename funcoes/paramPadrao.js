// estrategia 1 para gerar valor padrão
// zero vai se comportar como falso, logo assumirá o valor padrão
function soma1(a,b,c) {
    // se ao invés de um parâmetro padrão queremos um 
    // valor padrão pra variável, essa estratégia também funciona
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// como zero é tratado como falso, o valor padrão 1 é utilizado
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)); // 3 5 6 0

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a,b,c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // a mais segura pra números
    return a + b + c 
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0)); // 3 5 6 0

// valor padrão es2015
function soma3 (a=1, b=1, c=1) {
    return a + b + c 
}


console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0)); // 3 5 6 0