function divisibleSumPairs(n, k, ar) {
    // Write your code here
   // n = length of arr = 6
   // k = divisible number = 3
   // ar = array of nums = [ 1, 3, 2, 6, 1, 2 ]
   // output = amt of pairs whos sum is divisible by k = 5
        // 1+2
        // 1+2
        // 6+3
        // 2+1
        // 2+1

    let count = 0
    for(let i = 0; i < n; i++) {
        for(let j = (i+1); j < n; j++) {
            if((ar[i] + ar[j]) % k === 0) {
                count++
            }
        }
    }
    return count
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
console.log(divisibleSumPairs(2, 2, [8, 10]))
console.log(divisibleSumPairs(20, 7, [36, 46, 25, 97, 57, 14, 21, 50, 75, 58, 54, 32, 73, 11, 36, 22, 95, 46, 54, 61]))
