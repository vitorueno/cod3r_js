const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`);
}

// o evento aqui é um for, então para cada elemento 
// ele executa a função imprimir
fabricantes.forEach(imprimir)


fabricantes.forEach(fabricante => console.log(fabricante))
