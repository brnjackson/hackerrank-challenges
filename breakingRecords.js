function breakingRecords(scores) {
    // need to track the highest and lowest score at all times
    // if there is a score lower than the lowest record - that becomes the new lowest
    // same for highest
    // need tp track how many times there was lower or higher

    let lowCount = 0
    let highCount = 0
    let highScore = scores[0]
    let lowScore = scores[0]

    for(let i = 0; i < scores.length; i++) {
        let currentScore = scores[i]

        if(highScore < currentScore) {
            highScore = currentScore
            highCount++
        }
        if(lowScore > currentScore) {
            lowScore = currentScore
            lowCount++
        }
    }
    return [highCount, lowCount]

    let high = [scores[0]]
    let low = [scores[0]]

    scores.forEach(score => {
        if(score > high.reduce((a, b) => Math.max(a, b))) high.push(score);
        if(score < low.reduce((a, b) => Math.min(a, b))) low.push(score);
    })

    return [high.length-1, low.length-1]

}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))