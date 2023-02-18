// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

//P the parameter being passed in is an array of integers
//R the intended result is is an array of the two highest digits in the array.
  //if the array is empty, return empty array
  //if the array has less than two unique values, return as many as possible
//E twoHighest([1, 2, 3, 4]) would return [4, 3]
  //twoHighest([44, 44, 45,]) would return [45, 44]
//P I think i want to first sort the array from highest to lowest and store it in a variable
  //then i'd run a for loop with a conditional stating that if x[i + 1] does not equal x[i] and the length of the array i created is less than 2, then push to the new array.

  function twoHighest(arr) {
    let x = arr.sort((a, b) => b - a)
    let y = []
    
    for(let i = 0; i <= x.length; i++){
      if(x[i + 1] !== x[i] && y.length < 2){
        y.push(x[i])
      }
    }
    return y
  }