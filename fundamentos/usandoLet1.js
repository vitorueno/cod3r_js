// daria no mesmo se essa variável aqui fosse com let
var numero = 1 

// o let tem escopo diferente de global em bloco  
// fica igual python
{
    let numero = 2
    console.log('dentro=', numero); // 2
}

// o let está em um escopo diferente 
console.log('fora= ', numero); // 1