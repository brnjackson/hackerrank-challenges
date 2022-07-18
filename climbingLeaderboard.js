function climbingLeaderboard(ranked, player) {
    // Write your code here
    ranked.sort((a,b) => a-b)
    player.sort((a,b) => a-b)
    
    console.log(ranked,player)
    
    let places = ranked.length
    let count = 0

    for(let i = 0; i < ranked.length; i++) {
        for(let j = 0; i < player.length; j++) {
            if(player[j] < ranked[i]) {
                count = places
            }
        }
    }




    console.log(places)
    

}

console.log(climbingLeaderboard([100, 100, 50, 40, 40,  20, 10], [5, 25, 50, 120]))