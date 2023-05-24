let num = [5,8,2,9,3]
num.push(6)
num.sort()



//num[5] = 7
//num.push(8) //adicionar valores na última posição do vetor
//num.length //comprimento do array
//num.sort() // coloca todos os elementos em ordem crescente



console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O segundo valor do vetor é ${num[1]}`)



let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)



/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


for (let pos = 0; pos < valores.length; pos++) {
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/
let valores = [8, 1, 7, 4, 2, 9]
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


//===============================


const pessoa =["Nilton", "Cezar", 28];//array
//const pessoa ={nome:"Nilton", sobrenome:"Cezar", idade:28}//objeto

//pessoa.nome;//objeto
pessoa[0];//array

console.log(pessoa.length);
console.log(pessoa[pessoa.length -1])//saber qual é o valor do ultimo valor do array

//verificar se é uma array

console.log(Array.isArray(pessoa));
