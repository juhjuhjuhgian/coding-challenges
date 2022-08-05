// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    //P The only parameter here would be an array of numbers, marks
    //R I should be returning a whole number that is rounded down from the average of all the items
      //in the array/
    //E marks([1, 2, 3, 4]) would equal 2 (1 + 2 + 3 + 4) / 4 and rounded down 
      //marks([5, 6, 7, 8]) would equal 6 (5 + 6 + 7 + 8) / 4 and rounded down 
    //P I want to take the array, set it to a variabale, and use the method reduce 
      //to go through the array and add the next item to the total of the previous numbers
      //divide by 4, then use Math.floor() to round the number down
    let total = marks.reduce((a, b) => (a += b))
    
    return Math.floor(total / marks.length)
  }