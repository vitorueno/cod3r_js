// while com quantidade determinada de passos
let contador = 1
while (contador <= 10) {
    console.log(`contado = ${contador}`);
    contador++
}


// sempre usar o let para que a variavel contadora não 
// seja visivel fora do for 
for ( let i = 1; i <= 10; i++ ) {
    console.log(`i = ${i}`);
}


const notas = [ 6.7, 7.4, 9.8, 8.1, 7.7 ]

// percorrendo o array; começamos do indice 0 e 
// vamos até o tamanho do array - 1, por isso o '<'
for (let i = 0; i < notas.length; i ++) {
    console.log(`notas = ${notas[i]}`);
}