const funcs = []

/*
    preencher a lista com funções. Cada função 
    imprimirá um dos valores do laço, ou pelo menos
    é o que esperamos. Com o let é o que de fato ocorre
*/ 

// como o let tem escopo de bloco, ele respeita o valor atual da 
// variável i (lembra do valor do i)
for (let i=0; i<10; i++) {
    funcs.push( function() {
        console.log(i)   
    })
}

// ele de fato respeita o valor da execução:
funcs[2]() // 2
funcs[8]() // 8
funcs[6]() // 6
