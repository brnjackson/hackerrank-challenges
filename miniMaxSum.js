function miniMaxSum(arr) {
    // Write your code here
    // initalize min and max vals, sum
    
    let min = arr[0]
    let max = arr[0]
    
    let sum = 0
    
    for(let i = 0; i < 5; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
        sum += arr[i]
    }
    
    let minSum = sum - max
    let maxSum = sum - min
    console.log(minSum + ' ' + maxSum)
}
