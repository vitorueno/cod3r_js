
// ao usar var, i tem escopo global (não tem escopo de
//  bloco), logo pode ser acessado fora
for (var i=0; i<10; i++) {
    console.log(i); // 0 a 9
}

// i terá o valor que fez ele sair do laço
console.log(i); // 10