{ 
    { 
        { 
            { 
                var sera = 'Será' 
            } 
        }
    } 
}

// usar var: a variavel é visivel mesmo fora dos 
// blocos de código (se não for função) 
console.log(sera); // Será


function teste() {
    var local = 123
}

teste()

// var não é visivel fora da função 
console.log(local); // erro: local não está definido