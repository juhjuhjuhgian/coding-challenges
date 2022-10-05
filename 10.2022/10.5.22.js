// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

//p an integer, greater than or equal to one
//r an array of numbers up to and including the number passed in, starting at 1
//e preFizz(6) would return [1, 2, 3, 4, 5, 6]
//p I created a new empty array and stored it in variable arr
    //I used a for loop, starting at i, i would be less than or equal to the number passed in, and incrementing plus 1
    //push every number into the new array
    //return array
function preFizz(n) {
    let arr = []
    for(let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr
  }