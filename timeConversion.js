function timeConversion(s) {
    // Write your code here
    // '07:05:45PM
    //get last 2 characters
    let AMorPM = s.substring(8)
    //get the time wo AM/PM - remove last 2
    let fullTime = s.substring(0, 8)  
    //split numbers at the colons
    let times = fullTime.split(':')
    
    //if time contains PM
    if(AMorPM === "PM" ) {
        //if first value is not 12
        if (times[0] !== '12') {
            //add 12 to first value
            times[0] = parseInt(times[0]) + 12
        }
        else {
            //if the first value is 12
            times[0] === "12"
            //replace with 0s for midnight 
                times[0] = '00'
            }
        }
        // convert back to string with colons 
        return times.join(':')
    }

function timeConversion(s) {
    let AMorPM = s.substring(8)
    let time = s.substring(0, 8)
    let HMS = time.split(":")


    // if time is PM and not 12
    // change hour to whatever + 12
    if(AMorPM === "PM" && HMS[0] !== "12") {
        HMS[0] = parseInt(HMS[0]) + 12
    }
    //if time is AM and equal to 12
    //replace hour with 00
    else if (AMorPM === "AM" && HMS[0] === "12") {
        HMS[0] = "00"
    }
    return HMS.join(':')
}

//12:45:54PM
//04:59:59AM
//06:40:03AM

//12:05:39AM
//12:00:00AM
//12:40:22AM

console.log(timeConversion('12:05:39AM'))
console.log(timeConversion('12:00:00AM'))
console.log(timeConversion('12:40:22AM'))
