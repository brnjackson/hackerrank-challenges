function gradingStudents(grades) {
    
    // input = grades = [ 73, 67, 38, 33 ]
    //output = rounded grades = [75, 67, 40, 33]

    // if second digit ends in 3 or 4 > round to nearest 5
    // 8 or 9 > round to nearest 0
    // if less than 38 no rounding

    return grades.map((item) =>{
        if(item < 38) {
            return item
        }
        else if (item % 5 == 3) {
            item +=2
        }
        else if (item % 5 == 4) {
            item += 1
        }
        return item
    })
}

console.log(gradingStudents([ 73, 67, 38, 34 ]))