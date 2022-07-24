// function winner(erica, bob) {
//   // Write your code here

//   let ericaScore = erica.split("");
//   let bobScore = bob.split("");

//   for (let i = 0; i < ericaScore.length; i++) {
//     if (ericaScore[i] === "H") {
//       ericaScore[i] = 5;
//     }
//     if (ericaScore[i] === "E") {
//       ericaScore[i] = 1;
//     }
//     if (ericaScore[i] === "M") {
//       ericaScore[i] = 3;
//     }
//   }

//   for (let i = 0; i < bobScore.length; i++) {
//     if (bobScore[i] === "M") {
//       bobScore[i] = 3;
//     }
//     if (bobScore[i] === "E") {
//       bobScore[i] = 1;
//     }
//     if (bobScore[i] === "H") {
//       bobScore[i] = 5;
//     }
//   }

//   let ericaTotal = ericaScore.reduce((a, b) => a + b);
//   let bobTotal = bobScore.reduce((a, b) => a + b);

//   if (ericaTotal > bobTotal) {
//     return "Erica";
//   } else {
//     return "Bob";
//   }
// }

// console.log(winner("EHH", "EME"));
// console.log(winner("MMH", "HHH"));
// // console.log(winner('EHH', 'EME'))
// // console.log(winner('EHH', 'EME'))

// var sortColors = function(nums) {
//         let red = []
//         let white = []
//         let blue = []

//         for(let i = 0; i < nums.length; i++) {

//         if(nums[i] === 0) {
//             red.push(nums[i])
//         }
//                 if(nums[i] === 1) {
//             white.push(nums[i])
//         }
//                 if(nums[i] === 2) {
//             blue.push(nums[i])
//         }
//     }

//     return red.concat(white,blue)

//     return nums.sort((a,b) => a-b)
// };

// console.log(sortColors([2,0,2,1,1,0]))
// console.log(sortColors([2,0,1]))

// function hourglassSum(arr) {
//   // Write your code here
//   //highest value is -9....so the highest sum would be -9 * 7(values in hourglass)
//   let maxSum = -63
//   //loop through full array which each index is another array
//   for (let i = 0; i < 4; i++) {
//       //loop through values of each nested array
//       for(let j = 0; j < 4; j++) {
//           //get the sum if top 3 nums
//           let top = arr[i][j] + arr[i][j+1] + arr[i][j+2]
//           //middle num
//           let middle = arr[i+1][j+1]
//           //bottom 3 nums
//           let bottom = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
//           //add all sums together for total hourglass sum
//           let currSum = top + middle + bottom
//           //set the highest sum - compare max sum to currsum and return the larger number
//           maxSum = Math.max(maxSum, currSum)
//       }
//   }
//   return maxSum;
// }

// console.log(
//   hourglassSum([
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0],
//   ])
// );

// teleporters1 = ["3,1", "4,2", "5,10"]
// teleporters2 = ["5,10", "6,22", "39,40", "40,49", "47,29"]
// teleporters3 = ["6,18", "36,26", "41,21", "49,55", "54,52",
//                 "71,58", "74,77", "78,76", "80,73", "92,85"]
// teleporters4 = ["97,93", "99,81", "36,33", "92,59", "17,3",
//                 "82,75", "4,1", "84,79", "54,4", "88,53",
//                 "91,37", "60,57", "61,7", "62,51", "31,19"]

// const teleport = (teleporters, die, height, end) => {
//   // set moves counter
//   let i = 0;
//   // set list of landing squares
//   let squares = []
//   // loop through amount of possible moves
//   while (i < die) {
//     i++;
//     // add amount of moves to each square after height
//     // will stop after max amt of moves reached
//     let land = height + i;

//     // loop through teleporters array
//     teleporters.forEach((x) => {
//       // seperate string and convert to numbers
//       // pair is an array of square numbers
//       let pair = x.split(",").map((x) => Number(x));

//       // if we land on square with teleport destination
//       if (land === pair[0]) {
//         // change landing square to the teleporter
//         land = pair[1];
//       }
//     });

//     // if the landing square goes past the ending point, stop at end point
//     if (land <= end) {
//       // add all possible landing squares to list
//       squares.push(land);
//     }
//   }

//   // remove duplicate values
//   let allSquares = [...new Set(squares)]

//   return allSquares
// }
// console.log(teleport(teleporters1, 6, 0, 20))
// console.log(teleport(teleporters2, 6, 46, 100))
// console.log(teleport(teleporters2, 10, 0, 50))
// console.log(teleport(teleporters3, 10, 95, 100))
// console.log(teleport(teleporters3, 10, 70, 100));
// console.log(teleport(teleporters4, 6, 0, 100))

// var countSubstrings = function(s) {
  // const n = s.length;
  // const dp = new Array(n).fill().map(()=>Array(n).fill(false));

  // console.log(dp)
  // let cnt = 0;
  // for( let g = 0 ; g < n ; g++ ){
  //     for( let i = 0 , j = g ; j < n ; j++ , i++ ){
  //       console.log(dp[i][j])
  //         if( g === 0 ) // substring of length 1 is always a palindrome
  //             dp[i][j] = true;
  //         else if ( g == 1 ) // substring of length 2 is a palindrome only if end chars are same
  //             dp[i][j] = s.charAt(i) === s.charAt(j);
  //         else{
  //             if( s.charAt(i) === s.charAt(j) && dp[i+1][j-1] ) // any subtring is a palindrome if end chars match and inner substring is already a palindrome
  //                 dp[i][j] = true;
  //         }
  //         if( dp[i][j] )
  //             cnt++;
  //     }
  // }
  // return cnt;

//   let total = 0

//   for(let i = 0; i < s.length; i++) {
//     total += helper(i, i, s);
//     console.log(total)
//     total += helper(i, i+1, s)
//     console.log(total)
//   }

//   return total
// };

// const helper = (left, right, s) => {
//   let count = 0

//   while (left > -1 && right < s.length && s[left] === s[right]) {
//     count++
//     left--
//     right++
//   }
//   return count
// }

// console.log(countSubstrings("abc"))

// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//     //   if(nums[i] + nums[i+1] == target) {

//     //   let index = nums.indexOf(nums[i])
//     //   let index2 = nums.indexOf(nums[i+1])

//     //   if(index2 === index) {
//     //     index2++
//     //   }

//     //   return [index, index2]
//     // } 

//     var hold = target - nums[i]

//     if(nums.includes(hold) && i != nums.indexOf(hold)) {
      
//       return [i, nums.indexOf(hold)].sort()

//     }
 
// };
// }

// console.log(twoSum([11,15,2,7], 9))
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([3,3], 6))
// console.log(twoSum([3,2,3], 6))


/* 
You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be in order or next to each other. The letters cannot be reused.

Example:
words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat (the letters do not have to be in order)

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat (the letters do not have to be together)

string3 = 'baykkjl'
find_embedded_word(words, string3) -> None / null (the letters cannot be reused)

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

string5 = 'ccc'
find_embedded_word(words, string5) -> None / null

string6 = 'breadmaking'
find_embedded_word(words, string6) -> bird

All Test Cases:
find_embedded_word(words, string1) -> cat
find_embedded_word(words, string2) -> cat
find_embedded_word(words, string3) -> None / null
find_embedded_word(words, string4) -> baby
find_embedded_word(words, string5) -> None / null
find_embedded_word(words, string6) -> bird

Complexity analysis variables:

W = number of words in `words`
S = maximal length of each word or string
*/

// const words = ["cat", "baby", "dog", "bird", "car", "ax"];
// const w = words.length
// const string1 = "tcabnihjs";
// const string2 = "tbcanihjs";
// const string3 = "baykkjl";
// const string4 = "bbabylkkj";
// const string5 = "ccc";
// const string6 = "breadmaking";
// const string7 = "kjdkjfkjdfkjact"

// const embedded = (words, string) => {

//   let wordMatch = "none"
//   words.forEach((x) => {
//     let splitStr = string.split("")
//     let word = x.split("")
//     let count = 0

//     for(let i =0; i < word.length; i++) {
//       if(splitStr.includes(word[i])) {
//         let index = splitStr.indexOf(word[i])
//         splitStr.splice(index, 1)
//         count++  
//       }
//     }

//     if(count == word.length) {
//       wordMatch = word.join("")
//     }
//       })

//       return wordMatch

//     }

//     console.log(embedded(words, string1))
//     console.log(embedded(words, string2))
//     console.log(embedded(words, string3))
//     console.log(embedded(words, string4))
//     console.log(embedded(words, string5))
//     console.log(embedded(words, string6))
//     console.log(embedded(words, string7))

// const filter = (arr) => {

//   return arr.filter((f) => {return f !== 'one'})

// }

// console.log(filter(['one', 'two', 'three']))

// var addTwoNumbers = function(l1, l2) {

  // let number = Number(l1.reverse("").join(""))
  // let number2 = Number(l2.reverse("").join(""))
  // let sum = (number + number2).toString().split("").reverse()

  // return sum.map(x => Number(x))

  // let sum = 0
  // let curr = new ListNode();
  // let result = curr
  // console.log(result)

 
//     let h = new ListNode();
//     let c = h;
//     let carry = 0;
//     while (l1 || l2) {
//         let sum = (l1?l1.val:0) + (l2?l2.val:0) + carry;
//         carry = sum > 9 ? 1 : 0;
//         c.next=new ListNode(sum % 10,null);
//         c=c.next;
//         l1 =(l1)?l1.next:null;
//         l2 = (l2)?l2.next:null;
//     }
//     if (carry > 0) {
//         c.next = new ListNode(1);
//     }
//     return h.next;



// };

// console.log(addTwoNumbers([2,4,3], [5,6,4]))
// console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))

// magicSq = [[4,9,2],[3,5,7],[8,1,5]]

// const formingMagicSquare = (s) => {
//   let columnSum = 0
//   s.forEach((x) => {
//     let sum = x.reduce((a,b) => a+b)
//     for(let i = 0; i < x.length; i++) {
//       console.log(x[i])
//     }
    
//   })

//   return columnSum
// }

// console.log(formingMagicSquare(magicSq))

// test = [3,7,1,2,8,4,5]
// const sum = (arr, target) => {

// let total = 0

//   for(let i = 0; i < arr.length; i++) {   
//     for(let j = i; j < arr.length; j++) {
//       if(arr[i] + arr[j] === target) {
//         return "yes"
//       }

//       else {
//         return "no"
//       }
//     }
//   }
// }


// console.log(sum(test, 10))


// let h1 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
// let h2 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
// let word1 = 'abc'
// let word2 = 'zaba' // 7, 1, 3, 1  7(tallest) * 4 = 28

// h = assigns values to each letter in the alphabet - always has length of 26
// word = use the each letter and their corr height based on array
// output = multiply tallest letter (highest value) but amount of letters in word
  // input h1, word1 - returns 9 - b is the tallest letter height is 3 and there are 3 letters in abc = 3 * 3

// const pdfViewer = (h, word) => {
//  let maxHeight = 0

//  for (let c of word) {
//    let charHeight = h[c.charCodeAt(0) - 97]

//    if(charHeight > maxHeight) {
//      maxHeight = charHeight
//    }
//  }
//  return word.length * maxHeight
// }

// console.log(pdfViewer(h1, word1))
// console.log(pdfViewer(h2, word2))


// const utopianTree = (n) => {
// // n = number of cycles - the param

// let height = 1

// for(let i = height; i <= n; i++)  
//   i % 2 === 0 ? height++ : height *= 2
 
//   return height

// }

// console.log(utopianTree(0))
// console.log(utopianTree(1))
// console.log(utopianTree(4))

// function angryProfessor(k, a) {
//   // Write your code here
//   //k = amt of students needed on time to have class
//   // a = an array of arival times - pos nums are late 0 or neg nums are on time
//   // if on time is greater or equal to k return yes
//   // if not return no

//   let late = 0
//   let ontime = 0

//   for(let i = 0; i < a.length; i++) {
//     if(a[i] > 0) {
//       late++ 
//     }
//     else {
//       ontime++
//     }
//   }

//   console.log(late)
//   console.log(ontime)
//     if (ontime >= k) {
//       return 'NO'
//     }

//     else { return 'YES'}
//   }




// console.log(angryProfessor(3, [-1,-3, 4, 2]))
// console.log(angryProfessor(2, [0, -1, 2, 1]))

// function beautifulDays(i, j, k) {
//   // Write your code here
//   //i = start num
//   //j = end num
//   // k = divisible num
//   let beautifulDay = 0
//   for(let counter = i; counter <= j; counter++) {    

//     let reverseNum = Number(counter.toString().split("").reverse().join(""))
//     let difference = Math.abs(counter - reverseNum)
//     let answer = difference/k
  
//     if (answer % 1 == 0) {
//       beautifulDay++
//     }
//   }

//   return beautifulDay
// }

// console.log(beautifulDays(20, 23, 6))
// console.log(beautifulDays(11, 15, 3))

// function viralAdvertising(n) {
//   // Write your code here

// let sharedTo = 5 // the initial amount of people shared to
// let liked = 0 // the amount of likes
// let reach = 0 // total views
  
// for (let i = 1; i <= n; i++) {
//     liked = Math.floor(sharedTo/2) // half of the people it was shared to liked it
//     reach += liked // total amount of likes
//     sharedTo = liked * 3 // each like shares it to 3 others
// }

// return reach
// }

// console.log(viralAdvertising(3))

// function saveThePrisoner(n, m, s) {
//   // Write your code here
//   // 1 2 - should return 2
//   // 2 3 - should return 3
//   // 4 5 1 2 3 4 5 1 - should return 1

//   return ((s+m) - 1) % n || n

// }

// console.log(saveThePrisoner(5, 2, 1))


// console.log(saveThePrisoner(5, 2, 2))
// console.log(saveThePrisoner(5, 8, 4))