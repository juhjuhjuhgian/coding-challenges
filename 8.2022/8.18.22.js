// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

//P The parameter here is array and what is being passed in are arrays of integers
//R What should be returned is a new array of integers based on whether or not the number can
  //be squared or square rooted
//E squareOrSquareRoot([1, 4, 6, 4, 6, 9]) would return [1, 2, 36, 2, 36, 3]
//P I used the array method map to return a new array and to call a function for each item
  //I then created a variable for the item that was square rooted using Math.sqrt, passing in the item
  //I then used a ternary operator stating that if the number that was square rooted was an integer, return that number, otherwise, multipy the item by itself.

  function squareOrSquareRoot(array) {
    return array.map(elem => {
      let x = Math.sqrt(elem)
      
      return Number.isInteger(x) ? x : elem * elem
    })
  }