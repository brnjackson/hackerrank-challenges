function sockMerchant(n, ar) {
    // Write your code here
    // n = length of array = 9
    // ar = sock pile, listed by color = [10, 20, 20, 10, 10,30, 50, 10, 20]

    // initialize value for pairs
    let pairs = 0
    // organize socks by color
    ar.sort()
    // loop through pile of socks
    for(let i = 0; i < n; i++) {
        //if current sock is the same as the next sock
        if(ar[i] == ar[i+1]) {
            // keep sorting through the pile
            i++
            // add a new pair
            pairs++
        }
    }
    // return the amount of pairs
    return pairs
}

function sockMerchant2(n, ar) {

    let socks = {}


    return ar.reduce((a, b) => {
        if(socks[b]) {
            delete socks[b]
            return a + 1
        } else {
            socks[b] = true
    
            return a
            
        }
    }, 0)
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10,30, 50, 10, 20]))
