/* 25)​Escrever um programa para exibir os números de 1 até 50 na tela. */

function imprimirNumerosDeMAteN(M=1, N=50) {
    if (M > N) { [ M, N ] = [ N, M ] }
    
    for (let i = M; i <= N; i ++) {
        console.log(i);
    }
}

// execução
imprimirNumerosDeMAteN(1, 50)
console.log()
imprimirNumerosDeMAteN(50, 1)
