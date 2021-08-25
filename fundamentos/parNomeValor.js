// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// erro pois nesse contexto já existe esse identificado
// const saudacao = 'Epa '

// objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro', 
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao); // opa
console.log(exec()); // falaa
console.log(Cliente); // objeto cliente

