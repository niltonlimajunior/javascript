/*
Nesta aula do Curso de Javascript Completo vamos entender sobre JSON. JSON significa "Javascript Object Notation" que traduzido em português fica algo como "Notação de Objeto Javascript".

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também... um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no Javascript usamos dois métodos:

JSON.parse()  Converte texto no padrão JSON em objetos
JSON.stringify() Converte objetos em texto padrão JSON
*/

const carro = {marca: 'Fiat',modelo: 'Uno',ano: 2001}

document.getElementById('teste').innerHTML = carro;//O navegador não entende o objeto

let texto = JSON.stringify(carro);//converte o objeto carro em texto, para que o navegador possa entender

document.getElementById('teste2').innerHTML = texto;

let obj = JSON.parse(texto);//converte o texto para JSON

console.log(obj.modelo);



const carro1 = {marca: 'Fiat',modelo: 'Uno',motor: ['1,6','1.4','1.0']};//array dentro de um objeto
console.log(carro1.motor[2]);



//VIACEP - API de CEP que passa um CEP na URL e retorna um JSON

//requisitar acesso a API


/*
const ajax = new XMLHttpRequest();//método
ajax.open('GET','https://viacep.com.br/ws/01001000/json/')//abrir o site
ajax.send();//enviar a solicitação

ajax.onload = function(){
    document.getElementById('icep').innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    alert(obj.ddd);
}

*/

function buscarCEP(){
    let input = document.getElementById('icep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function(){
        //document.getElementById('res').innerHTML = this.responseText;
        //transformei o texto em objeto
        let obj = JSON.parse(this.responseText) 
        //peguei os valores que eu queria
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('res').innerHTML = "Logradouro:" +logradouro+ "<br>" + "Cidade:" +cidade+ "<br>" 
        + "Estado:" +estado;
    }   
}

