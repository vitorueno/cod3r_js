/*
    cenário: você fez dois trabalhos
    se os 2 deram certo: compro uma tv de 50 polegadas e um sorvete
    se só um der certo: compro uma tv de 32 polegadas e um sorvete
    se nenhum dos dois der certo: não compro tv nem sorvete
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // xor bitwise convertido para boolean
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2 // xor através do operador diferente
    const manterSaudavel = !comprarSorvete // operador unário
    
    // ES 2015: colocar a variavel com valor direto que o nome da chave
    // será criada com o nome da variavel de valor
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
} 

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));