// Função é First-Class Object (citizens)
// higher-order function

// criar de forma literal
function fun1() {}

// armazenar em variavel 
const fun2 = function () {}
// agora é possível acessar a função a partir dessa variável
// com parentesis executa e sem parentesis referencia


// armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3)); // executando 1ª função: 5

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar());

// passar função como param
// esse exemplo não é muito ilustrativo, mas existem muitas 
// situações em que isso é poderoso
function run(fun) {
    fun()
}

run(function () {
    console.log('Executando');
})

// uma função pode retornar/conter um função

function soma(a,b) {
    return function (c) {
        console.log(a + b + c);
    }
}

// atrasa o calculo de somar três numeros para uma segunda chamada

// fazendo direto
soma(2,3)(4) // 9

// armazenando em variavel
const cincoMais = soma(2,3) // 5
cincoMais(4) // 9 
