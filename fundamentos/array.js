const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3]); // 7.7 9.2

console.log(valores[4]); // undefined pois esse indice não existe

valores[4] = 10
// valores[11] = 2 // ficaria com 6 itens vazios no meio e o 2 no final 
console.log(valores); // agora inclui o 10

console.log(valores.length); // 5 

// adicionar um ou mais elementos ao final
valores.push({id:3}, false, null, 'teste')
console.log(valores);

// normalmente não é ideal vários tipos misturados

console.log(valores.pop()); // retira o último valor e o retorna

// deleta o elemento no índice informado (fica vaio)
delete valores[0] 
console.log(valores);
-
console.log(typeof valores); // tipo object