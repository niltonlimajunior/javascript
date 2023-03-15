function contar() {
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('ires')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Inválido! Considerando passo 1')
            p = 1 
        }
        if (i < f) {
            //contagem crescente
            for(let contador = i; contador <= f; contador += p) {
                res.innerHTML += `${contador} \u{1F449}`
        }
       } else {
            //contagem regressiva
            for(contador = i;contador >= f;contador -= p) {
                res.innerHTML += `${contador} \u{1F449}`
            }

       }
       res.innerHTML += `\u{1F3C1}`
    }
 }