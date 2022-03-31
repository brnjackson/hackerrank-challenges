function getTotalX(a, b) {
    // Write your code here
    // input
        // a = [ 2, 4 ] 
        // b = [ 16, 32, 96 ]
    // output = 3

    // counting how many divisors
    let validCount = 0
    
    // looping through every num under 100
    for(let i = 1; i <= 100; i++) {
        // if every number in the a array
        // is divisible by the current num
        if(a.every(num => (i % num == 0))) {
            // execute next block
            // if every number in the b array is divisible by the current num
            // add 1 to the valid count
            if(b.every(num => (num % i == 0))) {
                validCount++
            }
        }
    }
    // return number of divisible numbers
    return validCount
}