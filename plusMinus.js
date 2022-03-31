function plusMinus(arr) {
    // Write your code here
    // [ -4, 3, -9, 0, 4, 1 ]
    // get length of arr
    // count neg, pos and 0
    // return ratios
    // 2 neg, 3 pos, 1 zero
    
    let n = arr.length
    let neg = 0
    let pos = 0
    let zero = 0
    
    for(let i =0; i < n; i++) {
        if(arr[i] < 0) {
            neg++
        }
        else if(arr[i] > 0) {
            pos++
        }
        else {
            zero++
        }
    }
    console.log((pos/n).toFixed(6))
    console.log((neg/n).toFixed(6))
    console.log((zero/n).toFixed(6))
}