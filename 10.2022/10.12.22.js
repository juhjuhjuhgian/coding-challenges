// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr){
    let newArr = arr.sort((a, b)=> a -b)
    return [newArr[0],newArr[newArr.length -1]]; // fix me!
  }

//   Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

//   For example, if this array were passed as an argument:
  
//   ["Telescopes", "Glasses", "Eyes", "Monocles"]
  
//   Your function would return the following array:
  
//   ["Eyes", "Glasses", "Monocles", "Telescopes"]
  
//   All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

  function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };