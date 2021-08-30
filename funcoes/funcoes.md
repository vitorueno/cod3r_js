# Funções

## Cidadão de primeira linha

- é possível fazer MUITA coisa com função em JS
- First-Class Object (citizens) ou higher-order function: função é tratada como um dado, podendo passar como parâmetro ou retornado como resposta,função dentro de outras, armazenar função em variável...
- um dos pilares do paradigma funcional e da linguagaem em geral

### forma literal 

    function nome(parametros) {
        // bla bla 
    }

- toda função por padrão retorna undefined se não houver um retorno
- na função o bloco é obrigatório, mesmo se for em uma linha 

### armazenar em variavel

- função anonima. Da pra acessar/referenciar a função pelo identificador da variável

    const nome = function() {// bla}

### colocar em array

    const funcoes = [funcao1, funcao2, function (a,b) {return a+ b} ]
    console.log(array[2](2,3)); // 5 

### colocar em objeto 

    const obj = {}
    obj.falar = function() {return 'Opa'}

    console.log(obj.falar());


### colocar em parâmetro

    function run(fun) {
        fun()
    }

    run(function () {
        console.log('Executando');
    })

### retornar 

    function soma(a,b) {
        return function (c) {
            console.log(a + b + c);
        }
    }

    soma(2,3)(4) // 9
    const cincoMais = soma(2,3) // 5
    cincoMais(4) // 9 

---

## parametro e retorno são opcionais 

- mesmo se a função pedir dois parametros, é possível passar só um ou até 4.
- a função pode não retornar também, ou só retornar em um caso. 
- quando não retorna nada ele "retorna" implicitamente undefined

---

## parâmetros variáveis

- existe uma outra forma mais moderna de fazer isso (operador rest, spread) 
- mesmo se a função não espera nenhum parâmetro ela pode receber parametros
- esses parametros podem ser acessados pelo "arguments", que é um array

        for (i in arguments) {
            console.log(arguments[i])
        }

---

## parâmetro padrão 

- adicionado oficialmente no ecma script 2015, mas antes já era possível fazer isso
- estrategia 1:

        // se a valer zero a variavel receberia 1, pois zero é tratado como falso
        function bla(a) {
            a = a || 1 // 1 como valor padrão 
        }

- estrategia 2 

        // se não passou é undefined, então assume 1
        a = a !== undefined ? a : 1 

- estratégia 3
        
        // se o índice 1 (2º param) não existe nos argumentos,
        // assume 1  
        b = 1 in arguments ? b : 1

- estratégia 4 (melhor opção pra números)

        // se o parâmetro não for um número assume o valor padrão 1
        // (nesse caso é pra quando esperamos um número)
        c = isNaN(c) ? 1 : c 

---

## this pode variar

- this ou self (em algumas linguagens) referênciam o objeto atual da execução. Dentro do código que pertence ao objeto se usa essa palavra que acessa o dono do objeto. 
- no JS isso varia 
- no browser no escopo global: this é estritamente igual ao window
- exemplo: usar um onclick para registar o clique no body e só então usar uma função que verifica se this é estritamente igual a window. Nesse caso ele não é estritamente igual. Ele se torna igual ao body 
- **na arrow function**: this não varia mesmo com o onclick no body ele continua representando o window. Ele pega o contexto no qual a função foi definida (this léxico). 
- **função tradicional**: varia de acordo com quem chamou. 
- é um tema difícil, o importante agora é saber que pode mudar 

### this e a função bind

- dado um método de um objeto (uma função dentro do objeto) que usa o this para referenciar um atributo do objeto, se uma variavel criada fora do objeto passar a apontar para esse método, o valor de this é alterado. 
- nesse caso o método para de funcionar, necessitando do uso do bind
- objeto.funcao.bind(objeto): garante que o contexto de execução daquele método é o do objeto passado e não outro.

        // não pega o contexto do objeto
        const falar = pessoa.falar
        falar() // undefined

        // pega o contexto do objeto
        const falarDePessoa = pessoa.falar.bind(pessoa) 
        falarDePessoa() // Bom dia!

### this e bind 2 

- Exemplo: um método de um objeto que é chamado por um temporizador (setInterval) 
- *setInterval(função, milissegundos)*: executa a função a cada x milissegundos
- se criar um new Objeto, o this do método não apontará para o Objeto, logo haverá problemas
- **solução 1**: usar bind amarrando o objeto ao método

        setInterval(function() {
            this.idade ++
            console.log(this.idade);
        }.bind(this) , 1000)

- **solução 2**: atributo apontando pro this no momento da criação (self é um nome comum)

        const self = this
        setInterval(function() {
            self.idade ++
            console.log(self.idade);
        }, 1000)

--- 

## funções arrow 

- dois objetivos: sintaxe mais curta e this sempre associado ao contexto em que a função foi escrita

### funções mais curtas

- a intenção da arrow function é muitas vezes fazer funções pequenas, o que é benéfico pois cada função se torna específica e pode ser reaproveitada

        const func1 = (parametros) => {
            // bla bla 
        } 

        const func2 = () => {
            // bla bla 
        } 

        const func = soUmParametro => // bla bla que será retornado implicitamente

### this fixo 

- com arrow function this sempre assume o valor de onde a função foi criada 

    // dentro do objeto pessoa 
    // esse this sempre vai apontar pra pessoa por causa da arrow function
    setInterval(() => {
        this.idade ++ 
        console.log(this.idade);
    }, 1000) 

### testes com this 

- **em função convencional**: this aponta para o objeto global (global no Node e window no browser). Usando bind com um objeto, this passa a apontar para o objeto
- **em arrow function**: this aponta para o modulo atual (module.exports), que é 
um arquivo Node (parecido com o conceito de modulo python). Por padrão, this num arquivo node aponta para o module.exports 
- **arrow function vs .bind**: quem ganha é a arrow function, logo o contexto continua sendo o do local onde a função foi criada (module.exports por padrão) e não o objeto passado pelo bind.  

--- 

## funções anônimas

- por mais simples que sejam os conceitos, as vezes leva tempo para que se internalizem e se torne natural. Contruir uma base sólida é o que permite trocar de tecnologia com custo menor. 
- **função anonima**: é uma função sem nome

        // função anônima acessado pelo identificador da variável
        const soma = function (x, y ) {
            return x + y 
        }

        // em parametro 
        imprimirResultado(3, 4, function (x,y) { return x - y })
        imprimirResultado(3, 4, (x, y) => x * y)

        // em objeto acessado pelo atributo
        const pessoa = {
            falar: function () { console.log('Opa') }, 

            // nova sintaxe, mas da no mesmo
            gritar() { console.log('OPAAAAAAA!') }
        }

        pessoa.falar()

---

## função callback

- em tradução direta seria "chamar de volta"
- padrão observer utiliza muito isso 
- função, normalmente passada como parâmetro, que é executada depois que algum evento acontece. 
- pode ser chamada várias vezes ou uma única vez a depender do contexto
- normalmente é assíncrono e a aplicação continua rodando enquanto espera o momento de sua execução
- exemplo: pegar dados de uma api pode demorar, mas só podemos exibir na tela após isso acontecer. Para não ter uma espera ocupada podemos usar callbacks 
- ao criar um elemento pelo JS, pode ser interessante querer usar uma função callback para já estilizá-lo ou colocar funcionalidades dentro da função de criação, mas antes de inserí-lo de fato ao html.

        function imprimir(nome, indice) {
            console.log(`${indice +1}. ${nome}`);
        }

        // o evento aqui é um for, então para cada elemento 
        // ele executa a função imprimir
        fabricantes.forEach(imprimir)

### diferença entre usar ou não callback

- usando o filter para criar um novo array que contenha apenas os elementos que atenderem a uma certa condição 
- ao invés de criar um novo array, percorrer o array original, fazer um if e só então adicionar ao novo array, podemos usar callbacks:

    // pegar todas as notas baixas de um array de notas 
    // a função callback é uma arrow function
    const notasBaixas = notas.filter(nota => nota < 7)

    // muito menos trabalhoso

### callback dentro do browser

- no exemplo abaixo, a função callback só é executada quando o clique acontece na página (no body)

        document.getElementsByTagName('body')[0].onclick = function (e) {
            console.log('O evento ocorreu!');
        }

--- 

## funções construtoras

- é possível usar função como se usam classes em Java/C#: criar objetos/instâncias a partir de uma função, apesar da existência da sintaxe de classe. Objetos criados de uma function
- para criar atributos/método privados usamos var ou preferencialmente let/const, assim ele não pode ser acessado fora da função

        let velocidadeAtual = 0

- para criar um atributo/método público se usa o this: 

        this.getVelocidadeAtual = function () {
            return velocidadeAtual
        }

- assim, velocidadeAtual só é acessível se o método for utilizado 
- new NomeDaFunção para criar um objeto. Se tiver parâmêtros podem ser passados em um parêntesis

---

## tipos de declaração

- formas diferentes de se declarar função (revisão)
- **1º: function declaration**: usando declaração dessa forma ela pode ser chamada até linhas acima da declaração, pois o interpretador JS primeiro carrega as funções do código e só então interpreta as linhas

        // função convencional
        function nomeDaFunca(parametros){
            // corpo
        }

- **2º function expression**: só pode ser usada nas linhas abaixo da declaração

        // variavel que contém função anônima
        const nomeFuncao = function (x, y) {
            // copo
        }

- **3º named function expression**: só pode ser usada nas linhas abaixo da declaração (mesmo contento um nome)

        // variavel que contém função com nome
        // na maioria das vezes é para log ou debug
        const nomeFuncao = function nomeFuncao(x, y) {
            // copo
        }

- a vantagem de poder executar a função até antes da linha da declaração dela pode ser util em certas situações

--- 

## contexto léxico

- contexto no qual as coisas foram declaradas. Muito importante quando se trabalha com funções em geral 
- função tem consciência do contexto léxico dela (local onde ela foi escrita).
- mesmo se for chamada em outro local ou executada "bem longe", ela mantém o contexto original
- por conta disso, no exemplo abaixa ela exibirá o valor 'global'

        const valor = 'Global'

        function minhaFuncao() { console.log(valor) }

        function exec() {
            const valor = 'Local'
            minhaFuncao() 
        }

        exec() // Global

---

## closure

- closure é o escopo criado quando uma função é declarada, no lugar onde está a declaração de fato (function ...)
- esse escopo permite a função acessar e manipular variáveis externas à função
- closure pode ser entendido como fechamento, pois é um escopo que envolve a função 
- esse closure acompanha a função mesmo quando ela é acessada em outros lugares (contextos), por isso dizemos que a função tem memórias de sua origem, ela vai carregando isso com ela onde quer que vá

---

## função factory 

- função factory (fabrica): função que retorna um objeto
- pode ser fixo ou parametrizavel 
- retorna um objeto literal, mas a cada execução de fato temos novos objetos (instâncias)
- dentro do objeto podem ter dados ou funções

- **exemplo fixo:**

    function criarPessoa() {
        return {
            nome: 'Ana',
            sobrenome: 'Silva'
        }
    }

- **exemplo parametrizavel**

        function criarProduto(nome, preco) {
            return {
                // recurso "novo" do JS que omite chaves
                // iguais a variavel contendo o valor
                nome, 
                preco,
                desconto: 0.1 // valor fixo (poderia ser param padrao)
            }
        }

---

## classe vs função factory

- vamos comparar a ideia de classe com função factory

### classe 

- classe é uma forma diferente de escrever uma função construtora (instanciadora de objetos)
- usando um método construtor (tipo o \_\_init\_\_ do python) definimos os atributos públicos

        class Pessoa {
            constructor(nome) {
                this.nome = nome 
            }

            falar() {
                console.log(`Meu nome é ${this.nome}`);
            }
        }

        p1 = new Pessoa('Vítor')
        p1.falar() // Meu nome é Vítor

- navegador suporta a sintaxe de class, mas o this não apontará para o objeto, logo ele não imprimirá o nome no exemplo acima, e sim "Meu nome é undefined"
- o mesmo não ocorre com função factory, pois ela não usa this

### função factory

        const criarPessoa = nome => {
            return {
                falar: () => console.log(`Meu nome é ${nome}`)
            }
        }

        const p2 = criarPessoa('Ana')
        p2.falar() // Meu nome é Ana

- não sofre do problema do this variar pois não usa o this

### função construtora 

        function Pessoa(nome) {
            this.nome = nome 
            
            this.falar = function() {
                console.log(`Meu nome é ${this.nome}`);
            }
        }

        p1 = new Pessoa('Jonas')
        p1.falar()

- no navegador sofre do mesmo problema que usando class por causa da variação do this  

## IIFE

- função autoinvocada. Mesmo sem nome (anonima) já executamos ela na declaração, ou seja, na hora
- muitas vezes usado no browser para evitar manipular coisas no escopo global, pois apesar de já executada, tudo que for criada nela terá escopo local. No node cada arquivo é um módulo, então já é modularizada por essência
- **IIFE**: imediatly invoked function expression
- var, const let e tudo mais foge do escopo global (a princípio)
- **sintaxe**: parentesis para envolver a função e () no final para executar

        (function () {
            console.log('Será executado na hora!')
            console.log('Foge do escopo mais abrangente');
        })()

## call & apply

- existem muitas formas de se chamar uma função
- diretamente no escopo global, a partir de um objeto... usando call e apply
- no JS function é um tipo, portanto tem funções inerentes a ela, tal como o bind, o call e o apply 

### chamando diretamente
        
    
        function getPreco(imposto = 0, moeda = 'R$') {
            return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
        }

        global.preco = 20 
        global.desc = 0.1 
        console.log(getPreco()); // usou os valores globais: R$ 18

### chamando a partir de objeto 

        const produto = {
            nome: 'Notebook',
            preco: 4589,
            desc: 0.15,
            getPreco
        }

        console.log(produto.getPreco()) // usou os valores do objeto: R$ 3900.65

### chamando com call e apply 

    // no call passamos os parâmetros diretamente após informar o contexto (obj carro nesse caso)
    console.log(getPreco.call(carro, 0.17, '$')); //$ 46790.64
    console.log(getPreco.call(carro)); // usou parametros padrão: R$ 39992 
    
    // no call passamos os parâmetros dentro de um array, após informar o contexto (global aqui)
    console.log(getPreco.apply(global, [0.17, '$'])); //$ 21.06
    console.log(getPreco.apply(carro)); // usou parametros padrão: R$ 39992 

--- 

## comparação entre string de números 

- se compararmos números em formato de strings, com números de um digito ocorre igual na matemática

        '1' > '2' //output : false
        '1' > '1' //output : false
        '2' > '1' //output : true
        '4' > '2' //output : true

- se passar do 9, por conter números com dois dígitos, são comparados apenas o primeiro digito 

        '2' > '12' //output : true
        '5' > '42' //output : true
        '3' > '29' //output : true

- não é uma boa abordagem comparar números em formato string.