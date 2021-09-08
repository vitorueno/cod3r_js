/*
10) ​ Crie uma função que verifica se um número inteiro passado como parêmetro é
divisível por 3 e retorne true ou false.
*/

function ehMultiploDe3(numeroInteiro) {
    return (numeroInteiro % 3) === 0
}

// execução
console.log(ehMultiploDe3(27))
console.log(ehMultiploDe3(7))
console.log(ehMultiploDe3(2))
console.log(ehMultiploDe3(81))