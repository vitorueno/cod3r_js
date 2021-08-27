# Estruturas de controle

## visão geral

- alguns detalhes é o que faz diferença nesse capítulo, de resto é muito parecido com outras linguagens
- muitas coisas podem ser consideradas verdade no JS, logo nem sempre as estruturas de controle usam expressões relacionais clássicas 
- o mais problemático do JS não é a mecânica (sintaxe), mas sim a filosofia e conceitual da linguagem
- os próximos capítulos que serão mais conceituais
- começamos a alterar a ordem de execução do programa com essas estruturas

---

## if 

- executa o bloco de código mediante uma condição
- "faça algo se estiver houver condição, do contrário não faça nada"
- sintaxe igual de outras linguagens

        // parêntesis e chaves é o mais diferente do python
        if (condição) {

        }

- execução não mais linear. O if ramifica 
- não só expressões relacionais são avaliadas como verdade/falso no JS, inteiros diferentes de zero, strings não vazias, objetos e arrays são verdade e NaN, undefined, null, 0, string vazia são falsos

### observação sobre bloco de código

- é possível fazer um if sem abrir chaves, mas ele fica limitado a uma sentença de código, mesmo se a identação aparentar mais sentanças pertencentes ao bloco
- identação é apenas estilo no JS, diferente do python
- muitos programadores padronizam usar chaves independentemente da quantidade de sentenças de código, mesmo se for uma sentença
- não usar ponto é vírgula em bloco de controle, pois se colocar antes de abrir o bloco de código da estrutura, elas não estarão relacionadas

        if (condiçao); {} // bloco que não faz parte do if (sempre executado)

---

## if/else

- se e senão. Sintaxe igual de muitas outras linguagens
-  "faça algo se estiver houver condição, do contrário faça outra coisa"

        if (condicao) {

        } else {

        }

- ficar atento com o fato do JS ser fracamente tipado, então algumas coisas estranhas podem acontecer na condição se um tipo diferente do esperado for utilizado
- se tiver só uma sentença de código no IF ou no ELSE da pra retirar as chaves só de um, só do outro ou dos dois

---

## if/else if

- mais de uma condição. Tipo um filtro
- diferente do python não tem uma palavra elif 

        if (condicao) {
            // faz algo se for a 1º condição
        } else if (condicao) {
            // faz algo se for a 2º condição
        } else if (condicao) {
            // faz algo se fora 3º condiçaõ
        } else {
            // faz algo se não for nenhuma das condições
        }
        
- pode ou não ter else

---

## switch

- if e else if pode ser usada para multiplas seleção, mas não é a estrutura oficial, que seria o switch. O python não tem switch, mas é a mesma lógica que vários ifs com else if

        switch (expressao) {
            case VALOR:
                // faz algo
                break;
            case VALOR2:
            case VALOR3:
                // faz algo
                break;
        }

- a epxressão não é uma condição ou coisa relacionada com true ou false, e sim um valor. A partir daí é feito uma coisa diferente a depender do que se trata o valor
- se dois ou mais cases tiverem o mesmo bloco de código associado, então podem ser juntados em linhas diferentes ou na mesma linha
- o comportamento padrão do switch é executar o caso em que o valor se adequa a condição (case dele) e todos os outros abaixo dele (fall through)
- para ter o comportamento de entrar no case certo e sair após executá-lo é preciso usar o break
- não da pra usar intervalos nem valor float em um switch de inteiro (por isso é meio pobre)
- default: é o bloco padrão, parecido com o else do if. Não precisa de break pois é o último. Pode ficar em qualquer posição, contanto que se não for o último precisa do break

--- 

## while 

- ideal pra quantidade indeterminada de repetições. Enquanto algo não acontecer (independente de quantas vezes isso implicar), faça algo
- também é possível usar com quantidades determinadas, mas não é o foco
- tentar usar a estrutura ideal pra determinado caso
- atenção com laços infinitos, tal como no python 
- pode nunca entrar no while se a expressão for falsat

---

## do while

- garantir que o bloco seja executado pelo menos uma vez e só então avaliar a condição pra possível próxima execução
- não faz diferença na prática em questão de otimização 
- while comum é mais comum

        // executa o bloco pelo menos uma vez 
        do {
            // bloco
        } while (condição)

---

## for 

- o for é como se fosse um while com número determinado de passos, mas com os elementos do contador reunidos em um só lugar
- sempre lembrar de usar o let pra declarar a variavel contadora, pois senão ela será visivel até fora do for 

        for (let i = 0; i < 10; i++ ) {
            // bloco repetido 10 vezes
        }


---

## for in

- percorrer atributos de uma estruturas (objetos, arrays)
- não é a unica forma e nem a melhor, mas é uma opção válida e não especifica apenas ao array
- se for num array a variavel assume cada indice dele
- se for um objeto, a variavel assume cada chave dele
- pra objeto faz muito sentido usar dessa forma, pra array tem outras formas melhores
- sempre que possível usar let na variavel do for

        for (let i in arrayzin) {
            // i assumirá cada indice do array
        }

        for (let chave in objeto) {
            // chave assumirá cada chave do objeto
        }

---

## break/continue

- desviando o fluxo.
- break é uma forma de sair do switch, for e while
- continue pula para o próximo passo de um for ou de um while
- desencorajado, pois as vezes torna o código confuso
- usar quando for necessário, mas geralmente existem outras opções melhores, como quebrar o problema em várias funções/métodos
- elas interrompem um dos blocos citados mais próximos
- muitas situações do uso do for podem ser substituídas por funções alto nível como o foreach, filter, map reduce...

        for (let i in nums) {
            if (i == 5) break // "quebra" o laço/switch, saíndo dele
        }

        for (let j in nums) {
            if (j == 5) continue // "pula" pro próximo passo do laço
        }