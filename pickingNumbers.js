function pickingNumbers(a) {
    // Write your code here
    //a = array of numbers
    // need to return the length of the array where the difference of all numbers is 1. 
    // numbers that are consecutive
    // eg: [4, 6, 5, 3, 3, 1]
    // output = 3
    // [3, 3, 4]

const A = a.sort((a,b) => a-b)
let count = 0
let length = []

for(let i = 0; i < A.length; i++) {
    for(let j = i; j < A.length; j++) {
        if(Math.abs(a[i] - a[j]) <= 1) {
            count += 1
        }

    }

    length.push(count)
    count = 0
} console.log(length)

length.sort((a,b) => b-a)

return length[0]

}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))