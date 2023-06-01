// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.

//what i'm in as parameter is an array, could be neg, no floats, no strings, only int's
//return number of times that number that occurs the most
//mostFrequentItemCount([2, 3, 4, 5, 5, 5, ]) this would return 3
//for loop
//create count variable set = 0
//create highest variable set to =
//sort array
//collection[i] is equal to collection[i + 1] ? then increment count
//if count is higher than highest set highest to count
//return highest


//solution: i forgot to figure in empty array and i was guessing to maybe use a nested for loop
//but tried my way.

//WRONG CODE
// function mostFrequentItemCount(collection) {
//   let count = 0
//   let highest = 0
//   let arr = collection.sort((a, b) => b-a)
  
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === arr[i + 1]) 
//       count++
//     if(count > highest)
//       highest = count
//   }
//   return highest
// }

function mostFrequentItemCount(arr){
    let count = 0
    let highest = 0
    
    for(let i = 0; i < arr.length; i++){
      for(let k = 0; k < arr.length; k++){
        if(arr[k] == arr[i]){
            count++
        }
        if(count > highest){
            highest = count
        }
      }
      count = 0
    }
  return highest
  }