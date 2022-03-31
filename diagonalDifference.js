function diagonalDifference(arr) {
    // Write your code here
    // [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
    console.log(arr)
    let results = [0, 0]
    // going through whole array
    for(let i =0; i < arr.length; i++) {
        // getting nested values - first/last values in outside arr
        // middle value in inside ar
        let a = arr[i][i]
        console.log(a)
        let b = arr[i][arr.length-1-i]
        console.log(b)
        // replace results with sums of nums in arr
    results = [results[0] + a, results[1] + b]
    console.log(results)
    }
  return Math.abs(results[0]-results[1])
}