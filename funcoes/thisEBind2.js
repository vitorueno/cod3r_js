function Pessoa() {
    this.idade = 0

    // método do atributo: quando é iniciado this vale o objeto 
    // e mesmo depois permanece igual (self é um nome comum)  
    const self = this 

    // setInterval: executa a função passada a cada 
    // x milissegundos (segundo parametro)
    setInterval(function() {
        // trocamos "this." por "self." no método 2
        self.idade ++ 
        console.log(self.idade);
    }/*.bind(this)*/ , 1000) // método do bind

}

// em nenhum momento executamos a função do setInterval
// quem faz isso é o temporizador, logo o this pode complicar
// sem nenhum dos métodos: NaN infinitamente


new Pessoa 