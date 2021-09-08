/*
19) ​ O cardápio de uma lanchonete é o seguinte:
Código | Descrição do Produto    | Preço
100    | Cachorro Quente         | R$ 3,00 
200    | Hambúrguer Simples      | R$ 4,00
300    | Cheeseburguer           | R$ 5,50
400    | Bauru                   | R$ 7,50
500    | Refrigerante            | R$ 3,50
600    | Suco                    | R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido,
a quantidade e calcule o valor a ser pago por aquele lanche. Considere que
a cada execução somente será calculado um item. Use o comando switch. Crie
um caso default para produto não existente.
*/

function calcularPrecoPorQntdItem(codItem, qntdItem) {
    switch (codItem) {
        case 100:
            return 3 * qntdItem        
        case 200:
            return 4 * qntdItem      
        case 300:
            return 5.50 * qntdItem      
        case 400:
            return 7.50 * qntdItem      
        case 500:   
            return 3.50 * qntdItem      
        case 600:
            return 2.80 * qntdItem      
        default:
            return 'Produto inexistente'  
    }
}

// execução
console.log(calcularPrecoPorQntdItem(100, 3));
console.log(calcularPrecoPorQntdItem(200, 2));
console.log(calcularPrecoPorQntdItem(300, 2));
console.log(calcularPrecoPorQntdItem(400, 10));
console.log(calcularPrecoPorQntdItem(500, 10));
console.log(calcularPrecoPorQntdItem(600, 10));
console.log(calcularPrecoPorQntdItem(2345678, 100000));