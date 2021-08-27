function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao; // não precisa atribuir valor

// logo que entrar no bloco recebera o valor da função 
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(opcao);
} while (opcao != -1)

