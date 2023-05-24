/*
var
- usar o var da a função de reatribuir valores

let
- torna a variavel única, não pode ser redeclarada. Ao menos que ela esteja dentro de um scopo

const
- nunca pode mudar, mesmo que esteja dentro de um scopo não é possivel mudar o valor da variavel

*/

const x = 10;

{
    const x = 2;
    console.log(x)
}

console.log(x)