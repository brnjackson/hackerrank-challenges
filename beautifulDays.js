function beautifulDays(i, j, k) {
    // Write your code here
    //i = start num
    //j = end num
    // k = divisible num
    let beautifulDay = 0
    for(let counter = i; counter <= j; counter++) {    
  
      let reverseNum = Number(counter.toString().split("").reverse().join(""))
      let difference = Math.abs(counter - reverseNum)
      let answer = difference/k
    
      if (answer % 1 == 0) {
        beautifulDay++
      }
    }
  
    return beautifulDay
  }
  
  console.log(beautifulDays(20, 23, 6))