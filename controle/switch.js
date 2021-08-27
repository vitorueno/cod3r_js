const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        // faz uma coisa tanto se for 10 quanto se for 9
        case 10:
        case 9:
            console.log('Quadro de honra');
            break // preciso usar break para que os blocos abaixo não sejam executados 
        case 8: case 7: // não precisam estar em linhas diferentes
            console.log('Aprovado');
            break 
        case 6: case 5: case 4: 
            console.log('Recuperação');
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break 
        default: // caso padrão se assemelha ao else
            console.log('Nota inválida')
            // não precisa do break pois é o último bloco
    }
    // os breaks só saem do switch, não do método
    console.log('fim');
}

imprimirResultado(10) // quadro de honra
imprimirResultado(8.9) // aprovado
imprimirResultado(6.55) // recuperação
imprimirResultado(2.3) // reprovado
imprimirResultado(-1) // nota inválida
imprimirResultado(11) // nota inválida