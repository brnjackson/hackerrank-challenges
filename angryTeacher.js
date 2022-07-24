function angryProfessor(k, a) {
    // Write your code here
    //k = amt of students needed on time to have class
    // a = an array of arival times - pos nums are late 0 or neg nums are on time
    // if on time is greater or equal to k return yes
    // if not return no
  
    let late = 0
    let ontime = 0
  
    for(let i = 0; i < a.length; i++) {
      if(a[i] > 0) {
        late++ 
      }
      else {
        ontime++
      }
    }
  
    console.log(late)
    console.log(ontime)
      if (ontime >= k) {
        return 'NO'
      }
  
      else { return 'YES'}
    }
  
  
  
  
  console.log(angryProfessor(3, [-1,-3, 4, 2]))
  console.log(angryProfessor(2, [0, -1, 2, 1]))