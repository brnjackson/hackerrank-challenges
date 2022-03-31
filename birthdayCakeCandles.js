function birthdayCakeCandles(candles) {
    // Write your code here
    // [ 3, 2, 1, 3 ]
    // return occurences of highest number
    let max = Math.max(...candles)
    return candles.filter(item => item === max).length

}
