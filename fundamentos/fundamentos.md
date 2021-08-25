# Fundamentos do JavaScript

## Geral de programação: 

### Algoritmo: 

- algoritmo: sequência de passos; pode ser relacionado a prog. 
- repetição: podemos repetir um passo; x vezes ou até uma condição 
- decisão: fazer algo de acordo com uma condição; "se e senão" ou só "se"
- pro software usamos algoritmos, mas nem todo algoritmo é software
- a ordem importa: as vezes o resultado é certo, mas squência não otimizada 
                as vezes gera um resultado indesejado (bug)
- algoritmos = processamento, ação e verbo; dados = alimento, entrada; gera saída 
  
        entradas -> processamento -> saída 
        pode não ter saída; não ter entradas; ter apenas processamento 

#### Representação: 

- fluxograma; 
- linguagem natural (portugues...); 
- linguagem artificial (C#, Java, GO, Php, Python)
- pseudo-linguagem: parece a artificial com elementos do portugues (leia a; faça enquanto ..); 
- linguagem baixo nível mais próximo do pc, precisa saber da arquitetura; 
- linguagem alto nível mais próximo da linguagem natural; linguagem impacta no algoritmo

### Estrutura de dados: 

- dados: 1, "string", true, 3.14...
- estrutura de dados: organizar/administrar o dado; regras que o dado vai seguir
- tem regras; ex: as vezes a ordem importa, as vezes não
    - lista; 
    - fila = first in first out; 
    - pilha = last in first out;
    - árvore = diretórios e arquivos é um exemplo musicas/rock/; musicas/jazz...
    - tabelas = linhas/colunas 
    - estruturas de dados básicas = int,  real, letra, bool
    - personalizadas = especifico pra minha aplicação: Cliente(cpf, nome, idade), Cachorro...

- variaveis e constantes = armazenamos dados aqui; rotular um dado -> fácil trabalhar
- operações = atribuição, aritmética, relacionais; lógicas; inerentes ao tipo de dados 

--- 

## Estrutura de diretórios do curso:

- cada capítulo do curso um diretório 
- cada aula um arquivo (via de regra)

--- 

## Organização básica do javascript: 

- muitas formas de organizar o código
- no micro existe um core que é parecido com C 
- sintaxe parecida com Java, mas mindset diferente
- organização: sentença de código (; opcional) e bloco de código ({}); 

--- 

## Formas de executar JS: 

- ferramentas online; 
    - repl.it
    - jsfiddle

- console do browser;
  - dentro de um site pode-se usar todas as bibliotecas que o site carregou
  - no jquery posso usar a biblioteca jquery

- node;
  - node nome_arquivo.js 

- vscode; atom; sublime; 

---

## comentários 

- uma linha: //. Geralmente sobre linha seguinte 
- multiplas linhas: /* aqui vai o comentário */
- boas práticas 
  - evitar com comentários irrelevantes/óbvios; descrever coisas/detalhes úteis
  - dê preferência por código legível; código bem escrito = sem necessidade de comentários pra explicar tudo
  - comentar apenas quando necessário
  - comentar tudo que eu sentir necessidade de comentar no âmbito do curso   

--- 

## variáveis e constantes

var, let ou const: palavra para declaração 

let e const: jeito mais moderno de declarar variável 

- var: palavra histórica para variável JS
    
      var nome = "dado" 

- let: em geral usar let para variáveis 
  - diferente do var, redeclarar gera erro
  
- const: específico para constantes; 
  - não pode ser alterada
  - tentar por padrão usar const e só usar let se for preciso reatribuir

obs: usar nomes significativos

--- 

## tipagem fraca

- no JS não é preciso declarar o tipo
- tipagem dinâmica: variáveis podem assumir mais de um tipo ao longo da execução 
  - flexibilidade
  - mais sucetível a erros imperceptíveis
  - não significa que tipos não existem
- isso altera a filosofia da linguagem 

--- 

## tipo number 

números inteiros ou ponto flutuante

### métodos/funções: 
- Number(): converte string para numero 
- var.toFixed(num_casas): número de casas
- Number.isInteger(variavel): se é int; 1.0 é int
- var.toString(): converte para string
- var.toString(base): converte para string com a base numérica especificada (2 = binário)
 

### cuidados com number

- dividir por zero gera "Infinity" 
- "10"/2 resulta em 5
- "10,2"/2 resulta em "NaN" 
- não da pra multiplicar string :(
- 0.1 + 0.7 = 0.79999 -> pequenas imprecisões
- 10.toString() gera erro: precisa ser uma variavel 
- (10).toFixed(2) não gera erro: uso de parentesis

Nan = Not a Number

---

### objeto Math

- objeto Math relacionado à matemática
- objeto com valor do pi: Math.PI
- exponenciação: Math.pow(numero, expoente)

---

### string 

- cadeias de caracteres
- aspas duplas, aspas simples ou crase (2015 pra cá)
- crase é para template string
- string.charAt(indice): pega o caracter do indice informado (começa com zero)
- não gera erro se índice não for inexistente, e sim retorna nulo
- string.charCodeAt(indice): pega o código unicode do char no índice informado 
- string.indexOf('valor'): pegar o indice do caracter informa
- string.substring(inicio, [fim]): substringo do indice inicio até o indice fim (opcional), sem incluir o último, assim como no python
- string.concat('string'): concatenar uma string a outra3
- string.replace: troca o caracter do índice informado pelo valor do segundo parâmetro. 1º parametro pode ser uma expressão regular
- string.split(separador): gera array a partir de uma string, dividindo-a no(s) caracter(es) separador. Da pra usar regex também. 

### template strings

- forma mais fácil de concatenar variáveis em strings. Disponível a partir de 2015
- usar crase ao invés de aspas simples ou duplas na string
- ${variavel} ou ${expressao} a ser substituida na string 
- variavel, expressao, método, função

--- 

### boolean 

- aceita literal: true, false 
- aceita numeros inteiros: se for zero é false
- aceita strings: se for vazia é false
- e muitos outros valores
- depende do contexto nessas opções diferentes do literal true e false
- !! dupla negação força a interpretação como booleano 

---

### array

- agrupamento de valores de forma linear através de um único identificador, acessados por índices 
- tal como em outras linguagens, o 1° índice é 0
- array heterogênio (qualquer combinação tipos dentro dele) e tamanho não fixo (dinâmico)
- nomArray.lenght: retorna tamanho
- nomArray[indice_inexistente] = 10: atribui valor para aquele indice e se não existe, cria aquela posição e todas as anteriores ficam vazias se não for imediatamente colado.
- nomArray.push(item, item2...): adicionar item(s) ao final da lista
- nomArray.pop(): remove e retorna último elemento
- delete nomArray[indice]: deleta o valor e deixa a posição vazia
- array é do tipo objeto
- recomendado trabalhar com um só tipo por array, apesar de permitir misturar 
- acessar indice com item inexistente retorna undefined

### object

- confusão entre objeto e JSON (JS Object Notation). Um objeto em JS não é a mesma coisa que o JSON, apesar de ser parecido. JSON é um formato textual. Objeto é um tipo de dados da linguagem JS
- coleção de chave valor
- pode ser definido dinamicamente: nomObjeto.nova_chave = valor
- estilo dicionário do python
- chave tem que ter nome único
- da pra usar chaves com espaço: nomObjeto['chave com espaco'] = valor. Não é recomendado usar
- diferente do python, a chave textoal não precisa das aspas
- pode comportar vários tipos dentro das chaves, até funções, outros objetos...

---

### null e undefined

- atribuição por referência: aponta para o endereço de memória. Mais de uma variável pode apontar para esse mesmo objeto e alterar em um deles altera em todos
- atribuição por valor: troca o valor, mas não o mesmo objeto em si; mudar em uma variável não muda nas outras. 
- undefined: algo não definido, como uma variável declarada, mas não inicializada com valor
- null: explicitamente "nada". Nem valor nem endereço de memória
- para "zerar" uma variável explicitamete se recomenda usar o null 
- ficar atento que tentar operar com um null pode gerar erros
- deixar pra linguagem atribuir undefined; quando ela considerar ideal

---

### quase tudo é função

- "se JS fosse um país, a função seria o presidente"
- Object (o maiusculo) é uma função. Instanciar um objeto é instanciar uma função
- classe também é do tipo função (classe é um tipo diferente de escrever uma função)
- entender função é a base
- função pode ter atributos, pode ter outras funções... Pode atribuir função pra variável, passar função como parâmetro de outra função...

### exemplos de função 

- não precisa ser explicito o que vai ou se vai retornar 
- função é uma ação delimitada por bloco onde estão as sentenças de código. É como uma receita de bolo que pode ser reutilizada.
- pode não ter parametro, não retornar, receber e retornar... 
- JS não é nada formal: mesmo se a função espera 2 parâmetros e você passar zero ou um, ela tenta não gerar erro e retorna algo como NaN em uma soma, por exemplo. Mesmo se passar mais de 2, ela vai usar os dois primeiros
- é possível atribuir função em uma variável: função anonima
- uma das formas de fazer função anônima é com a arrow function  
- da pra fazer a arrow function ficar ainda menor quando tem apenas uma sentença de código: arrow function com retorno implicito.
- arrow function não é apenas para reduzir espaço

---

### declaração de variáveis

#### var 

- usando var: declarar variavel dentro de bloco faz ela ser visivel mesmo fora dos blocos (se não for função)
- no caso da função isso não é verdade. declarar com var dentro dela faz com que só seja visível na função
- objeto window do browser = declarar variavel com var fora de função a joga para o objeto window, portanto pode acabar sendo sobrescrita por acidente por causa dos escopos
- evitar variáveis com escopo global: apesar de poder acessar em qualquer lugar da aplicação, pode gerar erros dificeis de identificar, como vários lugares usando o mesmo nome de variável
- escopo: ou é escopo global (visivel a todos) ou é escopo de função. 

#### let 

- let tem escopos diferentes em bloco, diferente do var: visivel apenas dentro do bloco. Escopo global, escopo de função e escopo de bloco

#### var em loop 

- por não ter escopo de bloco, pode ser acessado a variável do for fora dele
- ela terá o valor que fez sair do laço: i<100, então seria 100
- no exemplo em que preenchemos um array com funções que em teoria se alteram de acordo com a variável i de um laço, isso não ocorre, e todas as funções dentro da lista retornam o mesmo valor, o último que fez sair do laço

#### let em loop

- tem escopo de bloco 
- tentar usar a variavel do for fora do for gera erro 
- no exemplo em que preenchemos o array com funções, cada função respeita o valor que o i tinha no momento em que foi criado

---

### hoisting

- "içar" ou jogar pra cima
- quando temos uma declaração e atribuição abaixo de uma sentença de código que usa essa variável, o JS, para evitar erros, joga a declaração (não a atribuição) acima do contexto, de forma que não gere um erro, apenas aplique undefined à variável

        console.log(a) // undefined
        var a = 10

        // mesmo que:
        var a
        console.log(a)
        a = 10

---

### função vs objeto

- se função é o presidente, então objeto é o vice presidente
- relembrando: classe é por baixo dos panos função. É só um detalhe de sintaxe
- new nomeDaFunção ou new nomeDaClasse é como se gera um objeto (instância da função ou da classe, que também é uma função)
- dessa forma, o Object (pertencente a api do JS) é uma função e instanciá-la gera um objeto
- o mesmo ocorre com qualquer função ou classe que você gerar no código
- funções que geram objetos no JS. Tanto que existe o conceito de função construtor. Outra opção é você gera o objeto de forma literal com {}
- diferença entre ter um objeto literal e gerar com uma função ou classe é que no segundo caso temos a receita de bolo e na primeira criamos uma instância isoladamente

---

### par nome/valor

- objeto possuem pares do tipo chave e valor 
- contexto léxico: lugar onde uma variável é definida fisicamente no código. Ex: num browser seria no objeto window para uma var global. Funções são contextos mais estritos 
- conceito de chave e valor se aplica às variáveis
- o identificador pode ser o mesmo se o contexto for diferente 

---

### notação ponto

- acessar membros de função, objeto... por meio do ponto. Ex: Math.PI, aluno.classe, mario.pular()
- usado em objetos do próprio JS, como o console, window, Math...
- usado em objetos literais 
- usado em funções/classe 
- podemos ir acessando elementos cada vez mais internos

---

### atribuição 

- colocar um valor numa variavel 
- é possível usar operadores em conjunto com o =, tal como no python
- +=, -=, *=, /=, %=... 
- es7 trouxe o **= para exponenciação: a = 2; a **= 3 // a vale 8 

### destructuring 

- desestruturação: tira algo da estrutura (objeto, array)
- duas formas de escrita, dependendo se é objeto ou array

#### objeto 

- podemos desestruturar atributos que passam a existir fora do objeto como variáveis, podendo usar o mesmo identificador ou passar um novo com o ':'
- podemos atrubuir um valor padrão para caso não seja encontrado nada no objeto ('=')
- pode-se acessar objetos aninhados, fazendo uma desestruturação dentro da outra
- ao acessar algo aninhado você deve ter certeza que o caminho existe, pois apenas o último dado pode ser nulo ou undefined


#### array

- usar com [variaveis] = array; 
- a variável pode ser mais de uma, ficando undefined se estiver fora de alcance
- é possível pular elementos com a virgula:

        [a, b, , d, e=0] = [1, 2, 3, 4] 
        // a vale 1, b vale 2, d vale 4, e vale 0 (valor padrão)
        // caso contrário valeria undefined

- também é possível usar valor padrão com o '='
- é possível fazer de forma aninhada também, ainda que não recomendado quando fica dificil de ler

#### função 

- quando se tem um parâmetro objeto, pode-se desestruturá-lo direto nos parâmetros
- é possível usar valor padrão tanto na desestruturação, quanto no fora dela, para ter algo caso não seja pssado um objeto 

        // espera um objeto e tenta destruturá-lo para gerar a variável a e b
        function bla ( { a, b=20 } = {} ) {
          // etc
        }

- no caso do array, é quase a mesma coisa, só usando o [] no lugar de {}
- também é possível usar desestruturação para alterar a ordem de duas variaveis:

        // gera um novo array [ max, min ] 
        // e o desestrutura para duas variaveis que passam 
        // a fazer sentido
        if (min > max) [ min, max ] = [ max , min ]

### operadores aritméticos

- resultam em números e tals
- operadores infix (entre os dois operandos), por isso são operadores binários
- simbolo de mais e de menos também são unários quando são sinais de positivo e negativo (unário prefix)
- soma (+), sub (-), mult (*), div (/), mod (%)
- es7 trouxe o ** como exponenciação, tal como no python
- assim, também funciona **= na atribuição

### operadores relacionais 

- resulta sempre em verdadeiro e falso
- no JS existe como comparar apenas o valor, sem levar em conta se são do mesmo tipo, ou fazer a comparação de modo mais restrita, que leva em conta o tipo
- mais recomendado usar o estritamente igual para evitar erros difíceis de perceber

### operadores lógicos

- relembrando a matério de lógica do 1° semestre
- tabela verdade para o 'e' e 'ou'
- I[T ^ T] = T; I[T ^ F] = F; I[F ^ V] = F; I[F ^ F] = F
- I[T v T] = T; I[T v F] = T; I[F v V] = T; I[F v F] = F
- I[T v ?] = T; I[F ^ ?] = F
- I[T xor T] = F; I[T xor F] = T; I[F xor V] = T; I[F xor F] = F
- I[¬T] = F; I[¬F] = T
- ou no JS = ||; se for só um | temos o "or" bit a bit
- e no JS = &&; se for só um & temos o "and" bit a bit 
- not no JS = !; 
- xor no JS: usar o !=; outra opção é fazer !!(var1 ^ var2), ou seja, usar o xor bit a bit transformando o resultado em boolean

### operadores unários

- já vimos o negação lógica (!) e o (+, - no contexto de sinal)
- outros operadores unários são o incremento e o decremento
- ++ e --: adicionar 1 e subtrair 1 respectivamente
- podem ser prefixados ou posfixados
- prefix tem maior precedencia do que posfix (++a antes de a++)
- dica: evitar incremento dentro de operações, para evitar dificuldade de ler por causa da ordem de precendencia prefix e posfix
- legibilidade geralmente implica em refatoração, mas buscar escrever de forma clara de primeira é recomendado
- codigo limpo é melhor que vários comentários

### operadores ternários

- operador ternario funciona com uma expressão relacional seguido por um '?' e dois valores divididos por ':'. O primeiro a esquerda do ':' será retornado se a expressão for true. O segundo caso seja falso
- um if/else reduzido, quando tem apenas uma linha

### contexto de execução: browser vs node

- importante saber o runtime: se estiver no frontend está executando JS dentro do browser, se for no backend será no Node
- entender o runtime auxilia a programar JS, pois algumas coisas vão mudar
- no frontend tem muito asincronismo para chamadas ao backend e é preciso conhecer padrões de projeto 

#### browser 

- no browser tem o Window, que é um objeto global com muitas propriedades, funções... variaveis globais e funções globais eles ficam dentro dele (nesse escopo global )
- no contexto global this é o window. This muda de acordo com o contexto
- usar var para declarar variavel global manda ela pro window e pode ser redeclarada (sobrescrita) sem aviso de erro (pode gerar confusão). 
- se usar let (e const) para criar variavel global ela não vai pro window, apesar de ser escopo global. Redeclarar (sobrescrever) gera erro. No escopo global this.b e Window.b vão ser undefined (this é o window no escopo global)
- criar função não anonima (function f1() {}) a manda para o objeto window também (escopo global, logo window.f1() e this.f1() funcionam);
- criar função anonima que usa const e let manda pro window, pois const e let não são enviadas. Logo this. e window. não a acessam 
- ou seja: evitar escopo global
- uma das formas de evitar escopo global: usar objetos com o let/const com atributos e funções anonimas. Dentro do objeto, this é o próprio objeto, logo é como numa classe do python, se um método (função do objeto) chamar this.nome, estará procurando o atributo nome dentro de si
- ao invés de poluir o escopo global com várias variaveis/funções globais, usamos apenas uma que contém muitas outras coisas que não estão no escopo global
 
#### node 

- global é o equivalente ao window
- this é o mesmo que module.exports ou seja, estaremos exportando para fora do arquivo. Cada arquivo é um modulo
- normalmente quando se quer exportar algo as pessoas fazem 

        module.exports = {e: 456, f: false, g: 'teste'}

- mas da no mesmo que usar o this.e = 456; this.f = false; this.g = 'teste'
- criar variavel sem const e let coloca a variavel no objeto global, algo que não acontece nem quando se usa o var para declarar variavel (não fazer isso)


#### moral da história

- ter consciência do runtime e das especificidades dos ambientes. 
- Conhecer principios, formas de se pensar, paradigmas e padrões de projeto. 
- fugir do escopo global


### tratamento de erro (Try/Catch/Throw)

- bloco try (tenta), catch (ocorreu um erro e agora) e finally (executa se deu erro ou não) 
- throw: pode ser usado para gerar um erro personalizado (throw new Error ('Minha mensagem de erro')) ou qualquer valor que você quiser, como um inteiro, string ou objeto. Pode ser usado para tratar o erro em uma função, por exemplo
- com o objeto do erro captado pelo catch é possível acessar o nome do erro e a mensagem de erro. erro.name e erro.message
- evitar mostrar pro usuário detalhes da infraestrutura, mensagens de erro da linguagem, mensagens em lingua diferente da do usuário. Em ultimo caso usar uma mensagem genérica ou gerar um código ou hash que também consta no log do sistema para que se saiba exatamente onde e quando o erro aconteceu.
