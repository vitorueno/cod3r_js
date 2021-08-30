// IIFE: imediatly invoked function expression

// parentesis para envolver a função e () no final para executar
// var, const, let... tudo a principio não é criado no escopo global
(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente');
})()

// já cria e executa a função