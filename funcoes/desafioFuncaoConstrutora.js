// usando função construtora ao invés de classe
function Pessoa(nome) {
    this.nome = nome 
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

p1 = new Pessoa('Jonas')
p1.falar()