function saveThePrisoner(n, m, s) {
    // Write your code here
    // 1 2 - should return 2
    // 2 3 - should return 3
    // 4 5 1 2 3 4 5 1 - should return 1
  
    return ((s+m) - 1) % n || n
  
  }
  
  console.log(saveThePrisoner(5, 2, 1))
  
  
  console.log(saveThePrisoner(5, 2, 2))
  console.log(saveThePrisoner(5, 8, 4))