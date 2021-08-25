// objeto é uma coleção de pares chave e valor 
const prod1 = {}

// da pra ir o definindo dinamicamente
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.4 // evitar atributos com espaço


console.log(prod1);

// outra opção é já definir os seus atribuitos na criação
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90, 
    obj: { 
        blabla:1,
        obj: { // só precisa ser único para o objeto em que faz parte
            blabla: 2
        }
    }
}

'{ "nome": "tênis top", "preco": 500}' // isso é um JSON (textual)

prod2['desconto legal'] = 0.4 // evitar atributos com espaço
console.log(prod2);