const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado');   
    } else {
        console.log('Reprovado!');
    }
}

imprimirResultado(7) // aprovado
imprimirResultado(6.9) // reprovado

// JS fracamente tipado: cuidado!
imprimirResultado('Epa!') // reprovado 