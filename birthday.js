function birthday(s, d, m) {
    // Write your code here
    // take values in array s
    // values represent numbers on each square
    // makes sure values can equal to total sum d
    // in the amounts of values equal to m

    // input
    //     s = [ 1, 2, 1, 3, 2 ] 
    //     d = 3
    //     m = 2
    // output
    //     amt of options = 2
    
    let result = 0

    for(let i = 0; i < s.length; i++) {
        let newSum = s.slice(i, i+m)
        if(newSum.reduce((a, b) => a + b) === d) {
            result++
        }
    }
    return result
}
console.log(birthday([ 1, 2, 1, 3, 2 ], 3, 2))