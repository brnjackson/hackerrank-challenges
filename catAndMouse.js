catAndMouse = (x, y, z) => {

    // x = cat A position
    // y = cat B position
    // z = mouse C position
    
    // return the cat with the closest distance to the mouse
    // if distance the same return the mouse

    // if(Math.abs(x - z) > Math.abs(y - z)) {
    //     return 'Cat B'
    // } else if (Math.abs(x - z) < Math.abs(y - z)) { 
    //     return 'Cat A'
    // }
    // return 'Mouse C'

    return (Math.abs(x - z) > Math.abs(y - z))? 'Cat B': (Math.abs(x - z) < Math.abs(y - z))? 'Cat A':'Mouse C'



}

console.log(catAndMouse(2,5,4))