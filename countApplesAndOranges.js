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
