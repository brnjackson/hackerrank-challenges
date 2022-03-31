function bonAppetit(bill, k, b) {
// bill = [ 3, 10, 2, 9 ] = cost of each item
// k = 1 = cost of item A did not eat
// b = 12 = amount of money A gave
// output = amt Anna is owed or Bon Appetit
// splitting the rest
    // remove item at bill[k] from array
  bill.splice(k,1)
  let sum = (bill.reduce((a,b) => a+b))/2

  if(sum === b) {
      console.log("Bon Appetit")
  } else {
      console.log(b - sum)
  }
}

console.log(bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288))
console.log(bonAppetit([ 3, 10, 2, 9 ], 1, 7))