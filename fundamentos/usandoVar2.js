var numero = 1

// o bloco que não é função tem o escopo global
{
    var numero = 2
    console.log('dentro =', numero); // 2 como era de se esperar
}


console.log('fora =', numero); // 2, pois a segunda declaração não foi em função
