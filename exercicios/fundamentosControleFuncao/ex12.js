/*
12)​ Faça um algoritmo que calcule o fatorial de um número.
*/ 

function fatorial(numero) {
    let fatorial = numero 
    numero --
    while (numero > 0) {
        fatorial *= numero  
        numero-- 
    }

    return fatorial
}


// execução 
console.log(fatorial(5));