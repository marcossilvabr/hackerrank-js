function sockMerchant(n, ar) {
    let i = n - 1
    let pairs = 0
    do {
        let c = ar[i]
        ar.splice(i, 1) // get one sock
        let of = ar.indexOf(c)
    
        if (of != -1) {
          ar.splice(of, 1) // if we find another sock, make a pair
          ++pairs
        }
        i--
    } while (i > 0)
    return pairs
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))