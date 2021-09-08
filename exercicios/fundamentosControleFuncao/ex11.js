/*
11) ​ As regras para o cálculo dos anos bissextos são as seguintes: De 4 em 4
anos é ano bissexto; De 100 em 100 anos não é ano bissexto; De 400 em 400 anos é
ano bissexto; Prevalecem as últimas regras sobre as primeiras.  Partindo daí
elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo
no console a mensagem e retornando true ou false
*/

function ehAnoBissexto(ano, mensagem=true) {
    const ehAnoBissexto = (ehDivisivel(ano, 4) && !ehDivisivel(ano, 100)) || ehDivisivel(ano, 400)

    if (mensagem) {
        let mensagemBissexto = 'não é ano um bissexto'
        if (ehAnoBissexto) {
            mensagemBissexto = 'é um ano bissexto' 
        }
        console.log(`O ano ${ano} ${mensagemBissexto}`)
    }

    return ehAnoBissexto
}

function ehDivisivel(numero, divisor) {
    return (numero % divisor) === 0
}

// execução
console.log(ehAnoBissexto(2020))
console.log(ehAnoBissexto(2021))
console.log(ehAnoBissexto(2000))
console.log(ehAnoBissexto(400))
console.log(ehAnoBissexto(800))
console.log(ehAnoBissexto(1900))