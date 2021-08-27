function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 

let quantidade = 1
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(opcao);
    quantidade ++
}

console.log('repetido', quantidade, 'vezes' );