// função anonima é uma função sem nome
const soma = function (x, y ) {
    return x + y 
}

const imprimirResultado = function (a, b, operacao=soma) {
    console.log(operacao(a, b));
}

// por padrão usamos a função de soma
imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, soma) // 7, mesmo chamando explicitamente

// as vezes funções anônimas são passadas como parâmetro diretamente 
imprimirResultado(3, 4, function (x,y) {
    return x - y
}) // -1 

// arrow function é sempre uma função anônima e também
//  pode ser passada como parametro
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa');
    }, 

    // nova sintaxe, mas da no mesmo
    gritar() {
        console.log('OPAAAAAAA!');
    }
}

// acessando função anônima apartir do atributo de um objeto
pessoa.falar() // falar