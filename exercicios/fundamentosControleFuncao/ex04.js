/* 04)Crie uma função que irá receber dois valores, o dividendo e o divisor. A
 * função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

function divisaoEResto(dividendo, divisor) {
    console.log(`${dividendo} / ${divisor} = ${dividendo / divisor}`)
    console.log(`Resto = ${dividendo % divisor}`)
}

// execução
divisaoEResto(9, 2)
