
function criarProduto(nome, preco) {
    return {
        // recurso "novo" do JS que omite chaves
        // iguais a variavel contendo o valor
        nome, 
        preco,
        desconto: 0.1 // valor fixo (poderia ser param padrão)
    }
}

console.log(criarProduto('Lata de refri', 3.5));
console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('iPad',1199.49));
