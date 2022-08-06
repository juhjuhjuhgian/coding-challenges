// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    //P The only parameter here passed in is the array of x
    //R The result we're looking for is multiplying each item of the array
    //E grow ([2, 4, 3, 2]) would total 48
      //grow ([3, 1, 1, 2]) would equal 6
    //P I'm going to use the array method reduce to multiply the total of the first number times the next
      
      return x.reduce((a, b)=> a * b)
    }