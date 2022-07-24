
const utopianTree = (n) => {
    // n = number of cycles - the param
    
    let height = 1
    
    for(let i = height; i <= n; i++)  
      i % 2 === 0 ? height++ : height *= 2
     
      return height
    
    }
    
    console.log(utopianTree(0))
    console.log(utopianTree(1))
    console.log(utopianTree(4))