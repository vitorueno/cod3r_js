function teste1(num) {
    // if sem chave s funciona, mas só uma sentença 
    // de código pertence a ela
    if (num > 7) 
        console.log(num) // executa se num > 7
        // identação no JS é apenas estilo: 
        console.log('Final') // sempre executado 
}

teste1(6) // Final
teste1(8) // 8 e Final

function teste2(num) {
    /* esse ponto e vírgula fez com que o bloco não estivesse
    relacionado com o if. O if ficou sem bloco de código 
    relacionado (faz nada) e o bloco de código em sequência
    sempre é executado */
    if (num > 7); { 
        console.log(num);
    }
}

teste2(6) // 6
teste2(8) // 8

// moral da história: não usar ponto e vírgula em estrutura
// de controle
