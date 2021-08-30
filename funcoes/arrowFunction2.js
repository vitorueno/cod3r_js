function Pessoa() {
    this.idade = 0

    // com o arrow function o this assume sempre o valor de 
    // onde ela foi criada
    setInterval(() => {
        this.idade ++ 
        console.log(this.idade);
    }, 1000) 

}

new Pessoa