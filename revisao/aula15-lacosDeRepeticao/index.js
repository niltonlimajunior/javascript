//for


console.log('Vai começar..')
for (var contador = 1;contador < 50;contador++) {
    console.log(contador)
    document.getElementById("icontador").innerHTML += contador + ", ";
}
console.log('FIM!')


var ano =new Date().getFullYear(); // pega o ano atual, assim com o passar dos anos não é necessario vir no código e mudar , ele faz automatico

for(let i= ano; i >= 1900;i--) {
    document.getElementById("iano").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}


//================

const carros =["Gol", "Fusca", "Ferrari", "Chevette"]
var tamanho = carros.length;

for(let i = 0; i < tamanho; i++) {
    document.getElementById("icontador").innerHTML += carros[i];
}