function parimpar(n) {
    if (n%2 == 0 ){
        return 'Par!'
    } else {
         return 'Ìmpar!'
    }
}

let res = parimpar(5)

console.log(parimpar(5))
console.log(`Este número é ${res}`)