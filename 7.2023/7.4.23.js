// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

//WRONG i didn't decrement and the iterator should've been += 2.
// function repeats(arr){
// let x = arr.sort((a, b) => a - b)
// let total = 0
// for(let i = 0; i <= x.length; i++){
//   if(arr[i] !== arr[i + 1]){
//     total += arr[i]
// }
//   return total
// };


function repeats(arr) {
    let i;
    let sum = 0;
    arr.sort((a, b) => {
      return a - b;
    });
    for (i = 0; i < arr.length; i += 2) {
      if (arr[i] !== arr[i + 1]) {
        sum += arr[i];
        i--;
      }
    }
  
    return sum;
  };
