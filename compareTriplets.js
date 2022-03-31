function compareTriplets(a, b) {
    let points = [0, 0]

    for(let i = 0; a.length > i; i++) {
        if(a[i]> b[i]) {
            points[0]++
        }
        else if(a[i] != b[i]) {
            points[1]++
        }
       
    }
    return points
}


console.log(compareTriplets([1, 27, 29], [1, 91, 11]));