function pageCount(n, p) {
    // Write your code here
    // n = total number of pages in book = 6
    // p = desired page number = 2
    // output
        // least amt of turns needed to reach desired page number
        // from last page n or first page 1
        // n = 30
        // p = 17
        // 1 turn = pg 2/3
        // 2 turn 4/5
        // 3 = 6/7
        // 4 = 8/9
        // 5 = 10/11
        // 6 = 12/13
        // 7 = 14/15
        // 8 = 16/17
// start from last pg
        // 1 = 28/29
        // 2 = 26/27
        // 3 = 24/25
        // 4 = 22/23
        // 5 = 20/21
        // 6 = 18/19
        // 7 = 16/17
        //output = 8 turns from begin or 7 turns from n

    //need to decrement by 2 from n
    // need to increment by 2 from 1

    // turns needed to get to desired page
    let pageTurns = Math.floor(p/2) // round down to nearest whole num
    // total turns needed to get to end of book
    let totalTurns = Math.floor(n/2) 

    // return lowest number out of pageTurns from pg 1 or pg turns from last page
    return Math.min(pageTurns, totalTurns - pageTurns)

}

console.log(pageCount(30, 17))
