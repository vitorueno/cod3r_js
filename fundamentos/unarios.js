let num1 = 1
let num2 = 2

num1++
console.log(num1);

--num1 
console.log(num1);

// prefix tem maior precedencia que posfix:
// ++ será executado antes do --, logo fica 
// 2 === 2 -> true
console.log(++num1 === num2--); // true

// o resultado é como se espera os dois diferentes um do outro
// 2 === 1 -> false
console.log(num1 === num2); // false, 

// dica: deixar o código mais simples possível
// evitar incrementos dentro de operações