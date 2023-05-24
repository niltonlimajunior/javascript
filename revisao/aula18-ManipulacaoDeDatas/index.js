//comando base para pegar data
let data = new Date();
console.log(data);

let ano = data.getFullYear(); // pegar o ano atual com 4 digitos
console.log(ano);

let mes = data.getMonth(); //mostra o mes em matriz
console.log(mes);
const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
let mesEscrito = meses[data.getMonth()];//transforma o mes matriz em mes escrito usando um array
console.log(mesEscrito);


let diaMes = data.getDate();//mostra o dia do mes
console.log(diaMes);


let diaSemana = data.getDay();//pega o dia da semana em matriz
console.log(diaSemana);
const semana = ['Domingo','Segunda','Terça','Quarta','Quinta','sexta','Sábado']
let semanaEscrita = semana[data.getDay()];//transforma o dia da semana matriz em escrito usando array
console.log(semanaEscrita);


let hora = data.getHours();//hora cheia
console.log(hora);

let hora1 = data.getMinutes();//pega os minutos
console.log(hora1);

let hora2 = data.getSeconds();//pega os segundos 99
console.log(hora2);

let hora3 = data.getMilliseconds();//pega os milisegundos 999
console.log(hora3);

let dataBr = data.toLocaleString('pt-BR'); // pega a data completa e a hora completa do Brasil
console.log(dataBr);

let dataBr1 = data.toLocaleString('pt-BR', {dateStyle: 'short'}); // abrevia para mostrar só a data
console.log(dataBr1);

let dataBr2 = data.toLocaleString('pt-BR', {timeStyle: 'short'}); // abrevia para mostrar só a hora
console.log(dataBr2);


//PEGAR VALORES SEPARADOS E CONCATENAR
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {
    return x<10 ? '0' + x : '' + x;
}

let dataAtualizada = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataAtualizada);

//COMPARA DATAS - MAIOR OU MENOR. EX: VENCIMENTOS

var hoje = new Date();
var vencimento = new Date(2023, 5, 15);

if(hoje > vencimento) {
    console.log('Sua conta está vencida!')
} else {
    console.log('Ainda não venceu')
}


//DIFERENÇA ENTRE DUAS DATAS EM DIAS

var dataInicial = new Date();
var dataFinal = new Date(2023,11,31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime(); // retorna o número de milissegundos desde 1º de janeiro de 1970 00:00:00.

var diferencaDias = Math.ceil(diferencaTempo / (24*60*60*1000));// transforma os millisigundos em dias

console.log(diferencaDias);
