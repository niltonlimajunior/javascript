function contar() {
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('ires')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
       res.innerHTML = 'Contando: '
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       for(let contador = i; contador <= f; contador += p) {
            res.innerHTML += `${contador} `
       }
    }
 }