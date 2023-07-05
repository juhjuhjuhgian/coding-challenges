// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

//we're passing in an array here of integers only, could be negative, could be floated
//i'm to return the difference between the largest int and smallest int
//betweenExtremes([1,2,3,4]) would return 3 (4 - 1)
//I first am going to create a new var and store the array of ints sorted from largest to smallest.
//then simply take the first number which is the largest at the zero index, and subtract it from the last item in the array.


//i ended up refactoring and using the spread operator and Math.min/max
function betweenExtremes(numbers) {
    //   let x = numbers.sort((a, b) => b-a)
      
    // return x[0] - x[x.length - 1]
      
      return Math.max(...numbers) - Math.min(...numbers)
    }