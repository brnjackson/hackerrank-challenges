function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    // x1, x2 = kangaroo start
    // v1, v2 = amt of meters he jumps 
    
    //input
    // x1 = 0 
    // v1 = 3 
    // x2 = 4 
    // v2 = 2
    
    // output = YES
    
   if (v1 < v2) return "NO";
   
   if ((x2-x1) % (v1-v2) == 0)
    return "YES";
    
   else return "NO";
}

console.log(kangaroo(0, 7, 5, 3))