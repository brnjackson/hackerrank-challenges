// function compareTriplets(a, b) {
//     let points = [0, 0]

//     for(let i = 0; a.length > i; i++) {
//         if(a[i]> b[i]) {
//             points[0]++
//         }
//         else if(a[i] != b[i]) {
//             points[1]++
//         }
       
//     }
//     return points
// }


// console.log(compareTriplets([1, 27, 29], [1, 91, 11]));

// function diagonalDifference(arr) {
//     // Write your code here
//     // [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
//     console.log(arr)
//     let results = [0, 0]
//     // going through whole array
//     for(let i =0; i < arr.length; i++) {
//         // getting nested values - first/last values in outside arr
//         // middle value in inside ar
//         let a = arr[i][i]
//         console.log(a)
//         let b = arr[i][arr.length-1-i]
//         console.log(b)
//         // replace results with sums of nums in arr
//     results = [results[0] + a, results[1] + b]
//     console.log(results)
//     }
//   return Math.abs(results[0]-results[1])
// }

// function plusMinus(arr) {
//     // Write your code here
//     // [ -4, 3, -9, 0, 4, 1 ]
//     // get length of arr
//     // count neg, pos and 0
//     // return ratios
//     // 2 neg, 3 pos, 1 zero
    
//     let n = arr.length
//     let neg = 0
//     let pos = 0
//     let zero = 0
    
//     for(let i =0; i < n; i++) {
//         if(arr[i] < 0) {
//             neg++
//         }
//         else if(arr[i] > 0) {
//             pos++
//         }
//         else {
//             zero++
//         }
//     }
//     console.log((pos/n).toFixed(6))
//     console.log((neg/n).toFixed(6))
//     console.log((zero/n).toFixed(6))
// }

// function staircase(n) {
//     // Write your code here
//     //iterate through all numbers from 0 - N
//     for(let i = 0; i < n; i++) {
//         // set empty string to start
//         let string = ""
//         // while iterating add a space for each num to N
//         for(let j = 0; j < n-i-1; j++) {
//             string += " "
//         }
//         // add one hashtag more for each number
//         // #
//         // ##
//         // ###
//         // etc
//         for(let k = 0; k < i+1; k++) {
//             string += '#'
//         }
//         // print out all spaces and #s
//         console.log(string)
//     }
// }

// function miniMaxSum(arr) {
//     // Write your code here
    
//     // initalize min and max vals, sum
    
//     let min = arr[0]
//     let max = arr[0]
    
//     let sum = 0
    
//     for(let i = 0; i < 5; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//         if (min > arr[i]) {
//             min = arr[i]
//         }
//         sum += arr[i]
//     }
    
//     let minSum = sum - max
//     let maxSum = sum - min
//     console.log(minSum + ' ' + maxSum)
// }

// function birthdayCakeCandles(candles) {
//     // Write your code here
//     // [ 3, 2, 1, 3 ]
//     // return occurences of highest number
//     let max = Math.max(...candles)
//     return candles.filter(item => item === max).length

// }

// function timeConversion(s) {
//     // Write your code here
//     // '07:05:45PM
//     //get last 2 characters
//     let AMorPM = s.substring(8)
//     //get the time wo AM/PM - remove last 2
//     let fullTime = s.substring(0, 8)  
//     //split numbers at the colons
//     let times = fullTime.split(':')
    
//     //if time contains PM
//     if(AMorPM === "PM" ) {
//         //if first value is not 12
//         if (times[0] !== '12') {
//             //add 12 to first value
//             times[0] = parseInt(times[0]) + 12
//         }
//         else {
//             //if the first value is 12
//             times[0] === "12"
//             //replace with 0s for midnight 
//                 times[0] = '00'
//             }
//         }
//         // convert back to string with colons 
//         return times.join(':')
//     }

// function timeConversion(s) {
//     let AMorPM = s.substring(8)
//     let time = s.substring(0, 8)
//     let HMS = time.split(":")


//     // if time is PM and not 12
//     // change hour to whatever + 12
//     if(AMorPM === "PM" && HMS[0] !== "12") {
//         HMS[0] = parseInt(HMS[0]) + 12
//     }
//     //if time is AM and equal to 12
//     //replace hour with 00
//     else if (AMorPM === "AM" && HMS[0] === "12") {
//         HMS[0] = "00"
//     }
//     return HMS.join(':')
// }

// //12:45:54PM
// //04:59:59AM
// //06:40:03AM

// //12:05:39AM
// //12:00:00AM
// //12:40:22AM

// console.log(timeConversion('12:05:39AM'))
// console.log(timeConversion('12:00:00AM'))
// console.log(timeConversion('12:40:22AM'))

// function mandraora(H) {
//    // health_point s = 1
//    // experience_point p = 0
//    // mandragora i
//    // e = 1 health point
//    // b =  health points * exp points
//    // e = s++
//    // b = P++
//    // 
// }

// [3,2,5]
// Action  s   p
// _______ _   __
// e, e, e 3    0
// e, e, b 3    15
// e, b, b 2    10
// b, b, b 
// b, b, e 
// b, e, e 
// b, e, b 
// e, b, e 

// function gradingStudents(grades) {
    
//     // input = grades = [ 73, 67, 38, 33 ]
//     //output = rounded grades = [75, 67, 40, 33]

//     // if second digit ends in 3 or 4 > round to nearest 5
//     // 8 or 9 > round to nearest 0
//     // if less than 38 no rounding

//     return grades.map((item) =>{
//         if(item < 38) {
//             return item
//         }
//         else if (item % 5 == 3) {
//             item +=2
//         }
//         else if (item % 5 == 4) {
//             item += 1
//         }
//         return item
//     })
// }

// console.log(gradingStudents([ 73, 67, 38, 34 ]))

// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here
//     // x1, x2 = kangaroo start
//     // v1, v2 = amt of meters he jumps 
    
//     //input
//     // x1 = 0 
//     // v1 = 3 
//     // x2 = 4 
//     // v2 = 2
    
//     // output = YES
    
//    if (v1 < v2) return "NO";
   
//    if ((x2-x1) % (v1-v2) == 0)
//     return "YES";
    
//    else return "NO";
// }

// console.log(kangaroo(0, 7, 5, 3))

// function getTotalX(a, b) {
//     // Write your code here
//     // input
//         // a = [ 2, 4 ] 
//         // b = [ 16, 32, 96 ]
//     // output = 3

//     // counting how many divisors
//     let validCount = 0
    
//     // looping through every num under 100
//     for(let i = 1; i <= 100; i++) {
//         // if every number in the a array
//         // is divisible by the current num
//         if(a.every(num => (i % num == 0))) {
//             // execute next block
//             // if every number in the b array is divisible by the current num
//             // add 1 to the valid count
//             if(b.every(num => (num % i == 0))) {
//                 validCount++
//             }
//         }
//     }
//     // return number of divisible numbers
//     return validCount
// }

// function breakingRecords(scores) {
    // need to track the highest and lowest score at all times
    // if there is a score lower than the lowest record - that becomes the new lowest
    // same for highest
    // need tp track how many times there was lower or higher

    // [10, 5, 20, 20, 4, 5, 2, 25, 1]

    // let lowCount = 0
    // let highCount = 0
    // let highScore = scores[0]
    // let lowScore = scores[0]

    // for(let i = 0; i < scores.length; i++) {
    //     let currentScore = scores[i]

    //     if(highScore < currentScore) {
    //         highScore = currentScore
    //         highCount++
    //     }
    //     if(lowScore > currentScore) {
    //         lowScore = currentScore
    //         lowCount++
    //     }
    // }
    // return [highCount, lowCount]

//     let high = [scores[0]]
//     let low = [scores[0]]

//     scores.forEach(score => {
//         if(score > high.reduce((a, b) => Math.max(a, b))) high.push(score);
//         if(score < low.reduce((a, b) => Math.min(a, b))) low.push(score);
//     })

//     return [high.length-1, low.length-1]

// }

// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))

// function birthday(s, d, m) {
    // Write your code here
    // take values in array s
    // values represent numbers on each square
    // makes sure values can equal to total sum d
    // in the amounts of values equal to m

    // input
        // s = [ 1, 2, 1, 3, 2 ] 
        // d = 3
        // m = 2
    // output
        // amt of options = 2
    
//     let result = 0

//     for(let i = 0; i < s.length; i++) {
//         let newSum = s.slice(i, i+m)
//         if(newSum.reduce((a, b) => a + b) === d) {
//             result++
//         }
//     }
//     return result
// }
// console.log(birthday([ 1, 2, 1, 3, 2 ], 3, 2))

// function divisibleSumPairs(n, k, ar) {
//     // Write your code here
//    // n = length of arr = 6
//    // k = divisible number = 3
//    // ar = array of nums = [ 1, 3, 2, 6, 1, 2 ]
//    // output = amt of pairs whos sum is divisible by k = 5
//         // 1+2
//         // 1+2
//         // 6+3
//         // 2+1
//         // 2+1

//     let count = 0
//     for(let i = 0; i < n; i++) {
//         for(let j = (i+1); j < n; j++) {
//             if((ar[i] + ar[j]) % k === 0) {
//                 count++
//             }
//         }
//     }
//     return count
// }



// console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
// console.log(divisibleSumPairs(2, 2, [8, 10]))
// console.log(divisibleSumPairs(20, 7, [36, 46, 25, 97, 57, 14, 21, 50, 75, 58, 54, 32, 73, 11, 36, 22, 95, 46, 54, 61]))

// function migratoryBirds(arr) {
//     // Write your code here
//     // arr = [1, 4, 4, 4, 5, 3] = input
//     // output = lowest number(type) with most occurences = 4
    
    
//     // let max = -1
//     // let maxId = 6
//     // 
//     // let store = new Array(6).fill(0)
//     // for(const num of arr) {
//     //     store[num]++
    
//     //     if(store[num] > max ) {
//     //         max = store[num]
//     //         maxId = num
//     //     } else if (store[num] === max && num < maxId) {
//     //         maxId = num
//     //     }
//     // }
//     // return maxId

//     let seenBirds = {}

//     arr.forEach((bird) => {
//         if(!seenBirds[bird]) {
//             seenBirds[bird] = 1
//         }
//         seenBirds[bird]++
//     })


//     let birdID = 0
//     let total = 0

//     for(let key in seenBirds ) {
//         if(seenBirds[key] > total) {
//             total = seenBirds[key]
//             birdID = key
//         } else if (seenBirds[key] == total) {
//             if(birdID > key) {
//                 birdID = key
//             }
//         }
//     }
//     return birdID


//     // let sortedBirds = arr.sort() // sorting array by lowest to highest id
//     // let birdId = sortedBirds[0] // current birdID

//     // let occurences = 1 // the highest amount of times the id has been seen
//     // counter = 0 // the actual count for each bird

    

//     // for(let i = 0; i < sortedBirds.length; i++) { // looping through sortedBirds
//     //     // if 
//     //     if (counter = (sortedBirds[i] === sortedBirds[i-1])) {
//     //         counter++
//     //     } if (counter > occurences) {
//     //         birdId = sortedBirds[i]
//     //         occurences = counter
//     //     }
//     // }

//     // return birdId

// }

// console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
// console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))

// function dayOfProgrammer(year) {
//     // Write your code here
//     // input = year =2017
//     // output = date of 256th day dd.mm.yyyy = 13.09.2017
//     // non leap years sept 13th and sept 12th in leap years

//     if (year === 1918) { // if transition year 1918
//         return "26.09." + year
//     }

//     //if gregorian leap year 1919 and later
//         // either divisible by 400
//         // divisibe by 4 and NOT 100
//     if(year >= 1919) {
//         if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//             return "12.09." + year
//         }
//     }
//     // if julian leap year 1917 and earlier
//         // divisible by 4
//         if(year <= 1917) {
//             if(year % 4 == 0) {
//                 return "12.09." + year
//             }
//         }
//     return "13.09." + year

// }

// console.log(dayOfProgrammer(2700))
// console.log(dayOfProgrammer(2600))
// console.log(dayOfProgrammer(2500))
// console.log(dayOfProgrammer(2300))
// console.log(dayOfProgrammer(2200))
// console.log(dayOfProgrammer(2100))

// function bonAppetit(bill, k, b) {
// // bill = [ 3, 10, 2, 9 ] = cost of each item
// // k = 1 = cost of item A did not eat
// // b = 12 = amount of money A gave
// // output = amt Anna is owed or Bon Appetit
// // splitting the rest
//     // remove item at bill[k] from array
//   bill.splice(k,1)
//   let sum = (bill.reduce((a,b) => a+b))/2

//   if(sum === b) {
//       console.log("Bon Appetit")
//   } else {
//       console.log(b - sum)
//   }
// }

// console.log(bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288))
// console.log(bonAppetit([ 3, 10, 2, 9 ], 1, 7))

// function sockMerchant(n, ar) {
//     // Write your code here
//     // n = length of array = 9
//     // ar = sock pile, listed by color = [10, 20, 20, 10, 10,30, 50, 10, 20]

//     // initialize value for pairs
//     let pairs = 0
//     // organize socks by color
//     ar.sort()
//     // loop through pile of socks
//     for(let i = 0; i < n; i++) {
//         //if current sock is the same as the next sock
//         if(ar[i] == ar[i+1]) {
//             // keep sorting through the pile
//             i++
//             // add a new pair
//             pairs++
//         }
//     }
//     // return the amount of pairs
//     return pairs

//     // let socks = {}


//     // return ar.reduce((a, b) => {
//     //     if(socks[b]) {
//     //         delete socks[b]
//     //         return a + 1
//     //     } else {
//     //         socks[b] = true
    
//     //         return a
            
//     //     }
//     // }, 0)
// }

// console.log(sockMerchant(9, [10, 20, 20, 10, 10,30, 50, 10, 20]))

// function pageCount(n, p) {
//     // Write your code here
//     // n = total number of pages in book = 6
//     // p = desired page number = 2
//     // output
//         // least amt of turns needed to reach desired page number
//         // from last page n or first page 1
//         // n = 30
//         // p = 17
//         // 1 turn = pg 2/3
//         // 2 turn 4/5
//         // 3 = 6/7
//         // 4 = 8/9
//         // 5 = 10/11
//         // 6 = 12/13
//         // 7 = 14/15
//         // 8 = 16/17
// // start from last pg
//         // 1 = 28/29
//         // 2 = 26/27
//         // 3 = 24/25
//         // 4 = 22/23
//         // 5 = 20/21
//         // 6 = 18/19
//         // 7 = 16/17
//         //output = 8 turns from begin or 7 turns from n

//     //need to decrement by 2 from n
//     // need to increment by 2 from 1

//     // turns needed to get to desired page
//     let pageTurns = Math.floor(p/2) // round down to nearest whole num
//     // total turns needed to get to end of book
//     let totalTurns = Math.floor(n/2) 

//     // return lowest number out of pageTurns from pg 1 or pg turns from last page
//     return Math.min(pageTurns, totalTurns - pageTurns)

// }

// console.log(pageCount(30, 17))

// function countingValleys(steps, path) {
//     // Write your code here
//     // steps = 8 = number of steps taken
//     // path = sequence of steps = "UDDDUDUU"

//     //setting a value if on mountain or below sea level
//     let currLevel = 0
//     // the amount of times we reach sea level
//     let valleys = 0

    
//     // seperate string into Us or Ds
//     path = path.split('')

//     // looping through each step
//     for(let i = 0; i < path.length; i++) {
//         // if current step is up - add 1 level
//         if(path[i] === 'U') {
//             currLevel += 1
//             // if current step is at sea level add 1 valley
//             if(currLevel == 0) {
//                 valleys += 1
//             }
//         }
//         // if current step is down - subtract 1 level
//         if(path[i] === 'D') {
//             currLevel -= 1
//         }
//     }
//     // amt of times we reached sea level
//     return valleys
// }

// console.log(countingValleys(8, "UDDDUDUU"))

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    // s = 7 = starting point of house
    // t = 11 = ending point of house
    // a = 5 = apple tree point
    // b = 15 orange tree point
    // apples = [ -2, 2, 1 ] = falling distance for each apple
    // oranges = [ 5, -6 ] = for each orange

    // return # of apples + # of oranges

    // 3 5 6   77 ------- 10 11   15 21

    console.log(apples.filter(apple => apple + a >= s && apple + a <= t).length)
    console.log(oranges.filter(orange => orange + b >= s && orange + b <= t).length)


}

console.log(countApplesAndOranges(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ]))
