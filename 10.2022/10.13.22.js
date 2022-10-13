// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//p the parameter in this function is an array of at least three integers
//r the intended result should be a single digit that is not the same as the others
//e stray([2, 3, 3, 3, 3]) should return 2 because its the only number two in the array
//p I had the idea of sorting the array first but couldn't figure out the conditional after so I ended up looking at the conditional and was missing the else statement pointing to the other end of the array.
  //What I had right was to store the new array in a variable and sort it via the sort method
  //I then used a conditional to say that if the item and in the 0 index and 1 index were the same, then the item at the end must not be correct.
  //The last part of the ternary operator was to say if that condition wasn't met then the item in the 0 index must be different and to return that.

  function stray(numbers) {
    let x = numbers.sort((a, b)=> a - b)
    return x[0] === x[1] ? x[x.length -1] : x[0]
     }
   