function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.legth == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let contador = 1
        tab.innerHTML = ''
        while (contador <=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            item.valeu = `tab${contador}`
            tab.appendChild(item)
             contador++
        }

    }
}