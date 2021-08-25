const nome = 'Rebeca'

// gera erro se quebrar linha, dentre outras coisas 
const concatenacao = 'Olá ' + nome + '!' 

// é possível quebrar a linha
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template);

// expressoes 
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

const up = texto => texto.toUpperCase()

// reparar que o cuidado está com aspas diferente da crase para não haver conflito
console.log(`Ei... ${up('cuidado')}!`) // EI... CUIDADO!