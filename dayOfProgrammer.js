function dayOfProgrammer(year) {
    // Write your code here
    // input = year =2017
    // output = date of 256th day dd.mm.yyyy = 13.09.2017
    // non leap years sept 13th and sept 12th in leap years

    if (year === 1918) { // if transition year 1918
        return "26.09." + year
    }

    //if gregorian leap year 1919 and later
        // either divisible by 400
        // divisibe by 4 and NOT 100
    if(year >= 1919) {
        if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            return "12.09." + year
        }
    }
    // if julian leap year 1917 and earlier
        // divisible by 4
        if(year <= 1917) {
            if(year % 4 == 0) {
                return "12.09." + year
            }
        }
    return "13.09." + year

}

console.log(dayOfProgrammer(2700))
console.log(dayOfProgrammer(2600))
console.log(dayOfProgrammer(2500))
console.log(dayOfProgrammer(2300))
console.log(dayOfProgrammer(2200))
console.log(dayOfProgrammer(2100))