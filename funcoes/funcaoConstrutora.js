function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado (pertence apenas ao escopo dessa função e
    //  não pode ser acessado fora)
    let velocidadeAtual = 0

    // método publico 
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta 
        } else {
            velocidadeAtual = velocidadeMaxima 
        }
    }

    // método público 
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }


}

const uno = new Carro // parentesis opcionais nesse caso
uno.acelerar()
console.log(uno.getVelocidadeAtual());
console.log(uno.velocidadeAtual); // undefined, pois é um atributo privado

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());

