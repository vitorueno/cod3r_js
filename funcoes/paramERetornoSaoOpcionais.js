// pode retornar algo em apenas uma situação
// esse exemplo não é muito real
function area(largura, altura) {
    const area = largura * altura
    if (area > 10) {
        console.log(`Valor acima do permitido: ${area}m2`);
    } else {
        return area
    }
} 

console.log(area(2,2)); // 4
console.log(area(2)); // 2 * undefined = NaN
console.log(area()); // NaN
console.log(area(2, 3, 17, 22, 44)); // 6: só usa os dois primeiros, mas sem erro
console.log(area(5,5)); // não retorna (undefined)

