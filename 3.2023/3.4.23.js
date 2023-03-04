// We will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength){
    let x = new Date(last)
    let y = new Date(today)
    let diffTime = Math.abs(x - y);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  
    return diffDays > cycleLength ? true : false
  }