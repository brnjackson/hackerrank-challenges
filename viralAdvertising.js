function viralAdvertising(n) {
    // Write your code here
  
  let sharedTo = 5 // the initial amount of people shared to
  let liked = 0 // the amount of likes
  let reach = 0 // total views
    
  for (let i = 1; i <= n; i++) {
      liked = Math.floor(sharedTo/2) // half of the people it was shared to liked it
      reach += liked // total amount of likes
      sharedTo = liked * 3 // each like shares it to 3 others
  }
  
  return reach
  }
  
  console.log(viralAdvertising(3))