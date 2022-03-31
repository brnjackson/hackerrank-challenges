function getMoneySpent(keyboards, drives, b) {
    // keyboards = arr of prices = [3, 1]
    // drives = arr of prices = [5, 2, 8]
    // b = budget total amt can spend = 10

    // output = 9 = highest spending amt under budget

    // loop through both arr of prices
    // determine most expensive pairing under budget
    // if no options return -1

    // return keyboards.reduce((a, i) => 
    //     Math.max(a, ...drives
    //         .map(usb => usb + i)
    //         .filter(totals => b >= totals)), -1)

    let max = -1

    for(let i = 0; i < keyboards.length; i++) {
        for(let j = 0; j < drives.length; j++) {
            let pair = keyboards[i] + drives[j]
            if(pair > max && pair <= b) {
                max = pair
            }
        }
        
    }
    return max

}
console.log(getMoneySpent([3, 1], [5, 2, 8], 10))