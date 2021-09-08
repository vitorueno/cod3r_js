/* 26)​ Fazer um programa para encontrar todos os pares entre 1 e 100. */

function acharTodosParesEntreMEN(M=1, N=100) {
    if (M > N) { [ M, N ] = [ N, M ] }

    let i = ehPar(M) ? M : M + 1
    for (i; i <= N; i+=2) {
        console.log(i);
    }    
}

function ehPar(numero) {
    return (numero % 2) == 0
}

// execução
acharTodosParesEntreMEN()
console.log()
acharTodosParesEntreMEN(100, 1)
console.log()
acharTodosParesEntreMEN(2, 20)