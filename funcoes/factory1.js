// definir objeto assim várias vezes repetiria muito código 

/*
const prod1 = {
    nome = '...',
    preco = 45
}

const prod2 = {
    nome = '...',
    preco = 1234
}
*/

/* função fábrica: retorna objeto 
pode ser fixa ou parametrizavel
mesmo que crie o objeto de forma literal, ele está [
gerando um objeto */
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());

