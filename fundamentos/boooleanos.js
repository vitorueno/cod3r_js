let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1 
// para acessar ele como boolean usamos a regra da dupla negação
console.log(!!isAtivo); // true; apenas uma exclamação = false;


console.log('os verdadeiros...');
console.log(!!3)
console.log(!!-1) // todos os números inteiros diferentes de zero são verdadeiro
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
// se o valor atribuido for considerado verdadeiro
console.log(!!(isAtivo = true)); // 33, Infinity...

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
// se o valor atribuido for considerado falso
console.log(!!(isAtivo = false)); // NaN, null, 0...

console.log('para finalizar');
console.log(!!('' || null || 0 || ' ')); // true: -' ' é verdadeiro
console.log(('' || null || 0 || 'epa' || 123)); // epa: primeiro valor verdadeiro encontrado


// se o nome não foi informado imprime Desconhecido
let nome = '';
console.log(nome || 'Desconhecido'); // 'Desconhecido' é considerado verdadeiro