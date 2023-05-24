var interruptor = "on";

if(interruptor == "on") {
    console.log('A lampada está ligada');
} else {
    console.log('A lampada está desligada')
}

var hora = new Date().getHours();

if(hora < 12 && hora > 3) {
    console.log('bom dia!');
} else if (hora > 11 && hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

//if e else geralmente usado no javascript para validação de formulários