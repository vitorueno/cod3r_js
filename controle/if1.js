// só mostra avisa quando a nota for boa, senão não faz nada
function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1) // aprovado com 8.1
soBoaNoticia(6.1) // nada


// não só expressões relacionais são classificadas 
// com true e false no JS
function seForVerdadeEufalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor);
    }
}

// vários exemplos do que é avaliado como true ou false
seForVerdadeEufalo() // passando undefined -> falso
seForVerdadeEufalo(null) // null -> falso
seForVerdadeEufalo(undefined) // undefined -> falso
seForVerdadeEufalo(NaN) // Nan -> falso
seForVerdadeEufalo('') // '' -> falso 
seForVerdadeEufalo(-1) // inteiro diferente de zero -> verdade
seForVerdadeEufalo(' ') // string não vazio -> verdade
seForVerdadeEufalo('?') // string não vazio -> verdade
seForVerdadeEufalo([]) // array -> verdade
seForVerdadeEufalo([1,2]) // array -> verdade
seForVerdadeEufalo({}) // objeto -> verdade