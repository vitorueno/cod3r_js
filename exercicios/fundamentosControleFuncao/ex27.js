/* 
27)​ Construa uma função que receba como parâmetros as alturas e as taxas de
crescimento anuais de duas crianças e calcule se existe uma criança menor, caso
exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá.
Utilize centímetros para as unidades de medida. 
*/

function quantosAnosParaEncontroDeAlturas(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {

    if (altura1 === altura2) {
        if (taxaCrescimento1 > taxaCrescimento2) {
            return `A criança 1 ultrapassará a criança 2 em 1 ano`
        } else if (taxaCrescimento2 > taxaCrescimento1) {
            return `A criança 2 ultrapassará a criança 1 em 1 ano`
        }
        return 'As duas crianças tem a mesma altura e mesma taxa de crescimento'
    }

    if (altura2 > altura1) {
        if (taxaCrescimento1 > taxaCrescimento2) {
            const tempoAlcancar = calcularTempoParaUltrapassarAltura(altura1, altura2, taxaCrescimento1, taxaCrescimento2)
            return `A criança menor ultrapassará a criança maior em ${tempoAlcancar} anos`
        }
        return `A criança menor não ultrapassará a maior`
    }

    if (altura1 > altura2) {
        if (taxaCrescimento2 > taxaCrescimento1) {
            const tempoAlcancar = calcularTempoParaUltrapassarAltura(altura2, altura1, taxaCrescimento2, taxaCrescimento1)
            return `A criança menor ultrapassará a criança maior em ${tempoAlcancar} anos`
        }
        return `A criança menor não ultrapassará a maior`
    }
}


function calcularTempoParaUltrapassarAltura(alturaA, alturaB, taxaCrescA, taxaCrescB) {
    let tempo = 0
    while (alturaA <= alturaB) {
        alturaA += taxaCrescA
        alturaB += taxaCrescB
        tempo++
    }
    return tempo
}


// execução
console.log(quantosAnosParaEncontroDeAlturas(150, 10, 170, 0));
console.log(quantosAnosParaEncontroDeAlturas(150, 20, 170, 0));
console.log(quantosAnosParaEncontroDeAlturas(170, 20, 150, 0));
console.log(quantosAnosParaEncontroDeAlturas(170, 0, 150, 20));