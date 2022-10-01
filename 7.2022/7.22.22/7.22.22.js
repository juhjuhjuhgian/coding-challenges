// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

function afterMidnight(h, m, s){

  let hourToMill = h * 3600000
  let minToMill = m * 60000
  let secToMill = s * 1000
  
  return hourToMill + minToMill + secToMill
} 

function pastMidnight(h, m, s){
    return ((h*3600) + (m * 60) + s) * 1000
}