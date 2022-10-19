// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//p the two items being passed in are integers, positive or negative
//r the expected result should be one integer, the sum off all the numbers in between the numbers passed in, including the ones passed in. If the numbers are the same, return that number
//e function getSum(1, 5) would return 15 (1 + 2 + 3 + 4 + 5)
//  function getSum(2, -3) would return 0 (-3 + -2 + -1 + 0 + 1 + 2 + 3)
//p I used an else if conditional stating that first, if the numbers matched, return that number. Then if a greater than b, run a for loop and add that number to a variable that I start at zero, and return that variable, keep going until the number is equal to a. then finally do the same thing if b is greater than a, setting i equal to a, i being less than or equal to b, and iterating by one.

function getSum( a,b ){
    if(a === b){
      return a
    } else if (a > b){
      let y = 0
      for(let i = b; i <= a; i++){
        y += i
      }
      return y
    } else if (b > a){
      let z = 0
      for(let i = a; i <= b; i++){
        z += i
  }
      return z
  }
    }