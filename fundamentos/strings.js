const escola = 'Cod3r'

// pegar char do índice informado: começam em 0
console.log(escola.charAt(4)); // r
console.log(escola.charAt(5)); // não aparece nada 

// pega o código unicode do char no índice informado
console.log(escola.charCodeAt(3)); // 51

// pegar o indice do caracter informado  
console.log(escola.indexOf('3')); // 3

// substrings
console.log(escola.substring(1)); // índice 1 até o final: od3r
console.log(escola.substring(0, 3)); // índice zero até 3 (sem incluir): Cod

// concatenar
// alternou tipos de aspas sem problemas
console.log("Escola".concat(escola).concat("!")); 
// console.log("Escola" + escola + "!"); // da no mesmo 

// replace: troca o caracter do indice informado pelo valor do segundo parâmetro 
console.log(escola.replace(3, 'e')); 
console.log(escola.replace(/\w/g, 'a')); // da pra usar regEx ao invés do índice

// transformar string em array com o separardor ','
console.log('Ana,Maria,Pedro'.split(',')); // também funciona regex no separador

