// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

//WRONG - don't know how close i was on this one, i don't think very. looking at the best solution though completely makes sense.
//using math.abs and finding the index of a and be and subtracting the difference and if it's one then true, if not false.
// function consecutive(arr, a, b) {
//   for(let i = 0; i <= arr.length; i++){
//     if((arr[i] === a) && (arr[i + 1] === b)){
//       return true
//     } else {
//       return false
//     }
//   }
// }

function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1  ? true : false;
  }