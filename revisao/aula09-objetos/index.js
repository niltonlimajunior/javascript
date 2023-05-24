//objeto é uma variavel com varios valores dentro

const carro = {marca:"ford", modelo:"ka", ano:2015}

// onde carro é a variavel - marca/modelo/ano é a propriedade(seguido de ford/ka/2015 que seria os valores dessas propriedades)

//método: é uma função colocada dentro de uma propriedade
//é uma prática usar o const em objetos para que evite erros ou possiveis alterações do objeto

const carro = {marca:"ford", modelo:"ka", ano:2015, placa:"ABC-1234"};

// quando o objeto já é definido as propriedades ele se chama "objeto literal".

//método

const carro = {
    marca:"ford",
     modelo:"ka",
      ano:2015,
       placa:"ABC-1234",
        buzina: function(){console.log('Biiiiiiiiiiiiii')}
    };

console.log(carro);
console.log(carro.marca);// para mostrar o valor específico de uma propriedade específica.
console.log(carro["ano"]); // também pode ser mostrado o valor com essa sintaxe

//chamar o método(no caso do exemplo é a buzina)
carro.buzina();

//outro exemplo de método (usando 'this'(this se traduz "este ou esse")neste caso 'este objeto')

const carro = {
    marca:"ford",
     modelo:"ka",
      ano:2015,
       placa:"ABC-1234",
        buzina: function(){alert('Biiiiiiiiiiiiii')},
         completo: function(){
            return "A marca é "+this.marca+" e o modelo é: "+this.modelo;
         }
    };
console.log(carro.completo());