// Task
// You're given a list of compareable elements:

// heights = [h1, h2, h3, …, hn]
// Your job is to check whether for any x all successors are greater or equal to x.

// isMonotone([1,2,3]) == true
// isMonotone([1,1,2]) == true
// isMonotone([1])     == true
// isMonotone([3,2,1]) == false
// isMonotone([3,2,2]) == false
// If the list is empty, Peter has probably removed your altimeter, so we cannot prove him wrong and he's still right:

// isMonotone([])     == True

//okay so we're taking in an array of integers here, no floats or negatives
//what we want to return is a boolean, based on whether or not the next number is greater than or equal to the number before it
//isMonotone([1,1,1]) would return true, isMonotone([2,1]) would return false
//so i'm thinking to use a conditional stating that if the length of arr is <= 1 then return true
  //otherwise run a for loop
  //within that for loop another conditional stating that if arr[i] === arr[i] OR arr[i] - 1 === arr[i-1] then return true
  //else return false


//WRONG - I had too much going on. I should have tried conditionally looked for false as that was the easier route.
// var isMonotone = function(arr){
//   if(arr.length <= 1){
//     return true
//   } else {
//     for(let i = 0; i <= arr.length; i++){
//       if(arr[i] === arr[i + 1] || arr[i] === arr[i] + 1){
//         return true
//       }
//     }
//   }
//       return false
// }

var isMonotone = function(arr){
    for(var i = 0;i <= arr.length; i++) {
      if(arr[i] > arr[i+1]){
        return false;
      } 
    }
    return true
  }