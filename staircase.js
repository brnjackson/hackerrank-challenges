function staircase(n) {
    // Write your code here
    //iterate through all numbers from 0 - N
    for(let i = 0; i < n; i++) {
        // set empty string to start
        let string = ""
        // while iterating add a space for each num to N
        for(let j = 0; j < n-i-1; j++) {
            string += " "
        }
        // add one hashtag more for each number
        // #
        // ##
        // ###
        // etc
        for(let k = 0; k < i+1; k++) {
            string += '#'
        }
        // print out all spaces and #s
        console.log(string)
    }
}