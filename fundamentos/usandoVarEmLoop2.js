const funcs = []

/*
    preencher a lista com funções. Cada função 
    imprimirá um dos valores do laço, ou pelo menos
    é o que esperamos
*/ 


// como var não tem escopo de bloco, ele não respeita o valor
// do i 
for (var i=0; i<10; i++) {
    funcs.push( function() {
        console.log(i)   
    })
}

// dessa forma, ambas as execuções retornam o valor que 
// fez ele sair do for
funcs[2]() // 10
funcs[8]() // 10