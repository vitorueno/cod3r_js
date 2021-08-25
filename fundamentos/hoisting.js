/* 
em outras linguagens geraria erro, mas no JS, quando 
encontra um var ele o declara acima (não atribui valor, 
apenas inicializa) 

como se aqui tivesse um 

var a

e depois ele usasse a assim:

a = 2
*/

console.log('a = ', a); // undefined
var a = 2
console.log('a =', a); // 2

// não é recomendável fazer isso no código, pois não há motivos


/*
// o mesmo ocorre dentro da função 
// (declaração vai pra cima na função)
function teste() {
    console.log('a = ', a); // undefined
    var a = 2
    console.log('a =', a); // 2
}

teste()
*/

// com let gera erro, pois ele não iça a declaração
/*
console.log('b=', b);
let b = 2
console.log('b=', b);
*/