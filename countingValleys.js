function countingValleys(steps, path) {
    // Write your code here
    // steps = 8 = number of steps taken
    // path = sequence of steps = "UDDDUDUU"

    //setting a value if on mountain or below sea level
    let currLevel = 0
    // the amount of times we reach sea level
    let valleys = 0

    
    // seperate string into Us or Ds
    path = path.split('')

    // looping through each step
    for(let i = 0; i < path.length; i++) {
        // if current step is up - add 1 level
        if(path[i] === 'U') {
            currLevel += 1
            // if current step is at sea level add 1 valley
            if(currLevel == 0) {
                valleys += 1
            }
        }
        // if current step is down - subtract 1 level
        if(path[i] === 'D') {
            currLevel -= 1
        }
    }
    // amt of times we reached sea level
    return valleys
}

console.log(countingValleys(8, "UDDDUDUU"))