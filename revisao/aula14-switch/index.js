

/*
    0 = Domingo
    1 = Segunda 
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado


*/

//switch é comparativo igual à o === , tanto de valor quanto de tipo
//ex:

let x = "0"

switch (x) {
    case 0:
        console.log('A variavel é 0')
        break;
    default:
        console.log('A variavel não é 0')
}



//var agora = new Date()
//var diaSem = agora.getDay()

var diaSem = new Date().getDay()
console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')   
        break
    case 2:
        console.log('Terça')    
        break
    case 3:
        console.log('Quarta') 
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}



//=============================

let cor = "AMarelo"
cor = cor.toLowerCase(); //força a variavel cor à ter todas as letras minusculas, idependente se o valor passado tiver em letra maiuscula

switch(cor) {
    case "azul":
        console.log('Azul')
        break
    case "vermelho":
        console.log('Vermelho')   
        break
    case "verde":
        console.log('Verde')    
        break
    default:
        console.log('Cor não disponivel')
        break
}