// closure é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variáveis externas à função

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x 
    }
    return dentro 
}

const minhaFuncao = fora()

/* aqui ele imprimirá 'Local', pois no contexto em 
que a função que estamos executando foi criada o 
valor de x era 'Local'. o que manda é o lugar efetivo da 
declaração (function ...) */
console.log(minhaFuncao()) // Local (!!!!)