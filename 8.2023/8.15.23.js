// You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.

// If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:

// inputs        outputs
// [2,1]     ->  [0,1,2]
// [1,4,4,6] ->  [0]
// Notes: all numbers are positive integers.

// This is set of example outputs based on the input sequence.

// inputs        outputs
// [0,1]   ->    [0,1]
// [1,4,6] ->    [0,1,2,3,4,5,6]
// [3,4,5] ->    [0,1,2,3,4,5]
// [0,1,0] ->    [0]

//WRONG I looked for one that was similar to what i was doing and I guess i should've used two for loops? That's the only difference I can spot
// function completeSeries(arr) {
// let nArr = arr.sort((a, b) => a - b)
// let x = []
// for(let i = 0; i < nArr.length; i++){
//   if(nArr[i + 1] === nArr[i] + 1){
//     return [0]
//   } else if(!x.includes(nArr[i])){
//     x.push(nArr[i])
//   }
// }
//   return x
// }

function completeSeries(arr) {
    var ar=arr.sort((a,b)=>b-a);
    for (var i=0; i<arr.length-1; ++i)
      if (arr[i]==arr[i+1])
        return [0];
    var ans=[];
    for (var i=0; i<=arr[0]; i++)
      ans.push(i);
    return ans
  }