// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

//P the two parameters being passed in here are an array of numbers, and a function which passes in an item
//R a boolean to be returned, false if the functions parameter does not meet the criteria of any of the numbers in the array, True if they all do
//E function none([1,2,3], function(item < 4)) would return true
//P I created a variable with a counter
    // created a for loop and iterated through the array
    // created a conditional stating that if fun(arr[i]) then count ++
    // returned that if count was greater than 0 then false, else true

function none(arr, fun){
  let count = 0
  
  for(let i = 0; i <= arr.length; i++){
    if(fun(arr[i])){
      count++
    }
  }
  return count > 0 ? false : true
}