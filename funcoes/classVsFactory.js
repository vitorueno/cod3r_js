// usando class 
class Pessoa {
    // tipo o __init__ do python
    constructor(nome) {
        // aqui definimos que isso é um atributo público
        this.nome = nome 
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João')
p1.falar() // Meu nome é João


// usando função factory
// não preciso de this pois o objeto tem ciência do contexto 
// léxico em que está inserido
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Ana')
p2.falar() // Meu nome é Ana
p2.nome = 'João' // aqui ele vai estar na verdade criando
p2.falar() // Meu nome é Ana (ele não usa um atributo ana no método falar)
