const valor = 'Global'

function minhaFuncao() {
    console.log(valor); 
}

minhaFuncao() // Global

function exec() {
    const valor = 'Local'

    // por conta do contexto léxico da funcao "minhaFuncao"
    // ela encontra o valor da linha 1 ('Global')
    // função carrega consigo a consciência de onde foi criada
    minhaFuncao() 
}


exec() // Global
