//Método Join

const pessoa =["Nilton", "Cezar", 28];

console.log(pessoa.join(" - "));

pessoa.pop();//remover ultimo item da matriz

console.log(pessoa.join(" - "));

pessoa.shift();//remove o primeiro item da lista(a posição dos itens muda)

console.log(pessoa.join(" - "));

pessoa.unshift("Nilton");//adiciona um valor no primeiro item(alterando novamente a posição dos itens na lista)

console.log(pessoa.join(" - "));

delete pessoa [1];//deleta o item mas não muda a posição dos demais itens(o local do item deletado fica como undefined)

console.log(pessoa.join(" - "));

pessoa.splice(1,0,"adicionado1", "adicionado2");//primeiro valor é a posição do item, segundo valor é se vai ou não remover mais itens na sequência

console.log(pessoa.join(" - "));

//=============================

//concatenar arrays

const lista1 = ["arroz","feijão","leite","macarrão"];
const lista2 = ["suco","refrigerante","carne"];
const lista3 = ["Bolacha","Ovo"];

const superLista = lista1.concat(lista2,lista3);

console.log(superLista);


//=====================

//Fatiar Arrays

const jogadores = ["Pelé","Maradona","Chiquinho","José"]
const craques = jogadores.slice(2,3);//primera posição sempre é incluida,a segunda fica de fora
jogadores.sort();//ordena em ordem alfabetica
jogadores.reverse();//ordem decrescente(somente quando usa o sort primeiro, caso contrario só inverte a ordem original)


console.log(jogadores);

console.log(jogadores[0])

//=============

//numeros em ordem numerica

const num =[56,45,25,1,65,8]
num.sort(function(a,b){return a - b});

console.log(num);

function maiorNumero(array){
    return Math.max.apply(null,array);
}
console.log(maiorNumero(num));

// filtrar numero no aray
const maior20 =num.filter(filtragem);
function filtragem(value, index, array) {
    return console.log(value > 20);
}


