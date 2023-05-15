// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

function tidyNumber(n){
    let x = +(n.toString().split('').sort((a, b) => a - b).join(''))
    return x === n ? true : false
  }