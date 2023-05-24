function cliquei(){
    alert('Olá mundo!')
}
function mouseEnter(){
    let entrouMouse = document.getElementById('botao');
    entrouMouse.style.background= 'green';
    entrouMouse.style.color= 'white';
}
function mouseSai(){
    let saiuMouse = document.getElementById('botao');
    saiuMouse.style.background= 'lightgray';
    saiuMouse.style.color= 'black';
}

//https://www.w3schools.com/js/js_events.asp

/* onfocus onablur onchange 

Usados

*/
//onfocus
function limpaTexto(){
    document.getElementById('campoTexto').value = "";
}

//onblur
function voltaTexto(){
    document.getElementById('campoTexto').value = "já vem com texto"
    }

//onchange
function alterou(){
    
    }