/*setTimeout(function, tempo em milisegundos)

Executa uma função, depois de esperar um número especifico de milisegundos.

setInterval(function, milisegundos)

É o mesmo que o setTimeout(), mas repete a execução da função continuamente

*/

/*
function ativarContagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    tempo = setTimeout(function(){
        document.body.style.backgroundColor = "lightgreen";
        document.getElementById('tempo').innerHTML = "Executou o setTimeout()!";
}, 5000)
}


function desativarContagem() {
   clearTimeout(tempo) //para a contagem do setTimeout()
        document.body.style.backgroundColor = "#fc8d8d";
        document.getElementById('tempo').innerHTML = "Parou a contagem!";
}
*/

/*
function ativarContagem(){
tempo = setInterval(function(){
    var cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) + 1;
    document.getElementById('tempo').innerHTML = soma;

},1000);
}

function desativarContagem(){
    clearInterval(tempo);
}
*/
function ativarContagem(){
    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma === 0) {
            document.getElementById('tempo').innerHTML = "Tempo esgotado";
            desativarContagem();
        } else {
            document.getElementById('tempo').innerHTML = soma;
        }
    },1000);
    }
    
    function desativarContagem(){
        clearInterval(tempo);
    }