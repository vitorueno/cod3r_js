const pessoa = {
    saudacao: 'Bom dia!', 
    falar() { // recurso novo: opção de criar método assim
        console.log(this.saudacao); // acessando o atributo do dono (pessoa)
    }
}

pessoa.falar() // Bom dia!


/* agora this aponta pra outra coisa, então o método não 
funciona mais no contexto do objeto*/
const falar = pessoa.falar
falar() // undefined

// usando o bind e passando o objeto de contexto resolvemos o problema
// amarra objeto para ser o dono da execução daquele método

const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa() // Bom dia!

/* 
com o bind o método permanece inalterado: bind retorna outra 
função 

const falar2 = pessoa.falar
falar2() // undefined

// pode ser usado em react para garantir comportamentos esperados
*/ 