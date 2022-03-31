function migratoryBirds(arr) {
    // Write your code here
    // arr = [1, 4, 4, 4, 5, 3] = input
    // output = lowest number(type) with most occurences = 4
    
    let max = -1
    let maxId = 6
    
    let store = new Array(6).fill(0)
    for(const num of arr) {
        store[num]++
    
        if(store[num] > max ) {
            max = store[num]
            maxId = num
        } else if (store[num] === max && num < maxId) {
            maxId = num
        }
    }
    return maxId
}
function migratoryBirds2(arr){

    let seenBirds = {}

    arr.forEach((bird) => {
        if(!seenBirds[bird]) {
            seenBirds[bird] = 1
        }
        seenBirds[bird]++
    })


    let birdID = 0
    let total = 0

    for(let key in seenBirds ) {
        if(seenBirds[key] > total) {
            total = seenBirds[key]
            birdID = key
        } else if (seenBirds[key] == total) {
            if(birdID > key) {
                birdID = key
            }
        }
    }
    return birdID
}
function migratoryBirds3(arr){
    let sortedBirds = arr.sort() // sorting array by lowest to highest id
    let birdId = sortedBirds[0] // current birdID

    let occurences = 1 // the highest amount of times the id has been seen
    counter = 0 // the actual count for each bird

    

    for(let i = 0; i < sortedBirds.length; i++) { // looping through sortedBirds
        // if 
        if (counter = (sortedBirds[i] === sortedBirds[i-1])) {
            counter++
        } if (counter > occurences) {
            birdId = sortedBirds[i]
            occurences = counter
        }
    }

    return birdId

}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))
