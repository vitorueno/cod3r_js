// igualdade sem levar tipo em conta, apenas o valor
console.log('01)', '1' == 1); // true 

// igualdade estrita: leva o tipo em conta
console.log('02)', '1' === 1); // false

// desigualdade sem levar tipo em conta
console.log('03)', '3' != 3); // false

// desigualdade levando tipo em conta
console.log('03)', '3' !== 3); // true

// menor
console.log('05)', 3 < 2); // false

// maior
console.log('06)', 3 > 2); // true

// menor igual
console.log('07)', 3 <= 2); // false

// maior igual
console.log('08)', 3 >= 2); // true 

// d1 e d2 são variáveis de referência de 
// memória para objetos diferentes
const d1 = new Date(0)
const d2 = new Date(0)

// assim, não faz diferença usar igual ou estritamente igual
console.log('09)', d1 === d2); // false

// assim, não faz diferença usar igual ou estritamente igual
console.log('10)', d1 == d2); // false

// aqui, comparamos o numero das duas datas 
//  == também funcionaria, pois tem o mesmo tipo e valor
console.log('11)', d1.getTime() === d2.getTime()); // true


// null e undefined são iguais mas quando levamos o tipo 
// em conta não
console.log('12)', undefined == null); // true
console.log('12)', undefined === null); // false
