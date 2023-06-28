// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 

//so i'm receiving two things: an array of integers (could be 0, could be negative, non float) and a single integer
//i'm to return the nth smallest number based on the second parameter
//for example nthSmallest([1,2,3], 1) would return 1 becauase it would be the smallest
//nthSmallest([5,3,1,0,-1], 3) would return 1 because its the 3rd smallest
//so first i need to sort the array using sort method and store that in a variable
//i could be wrong, but i'm thinking i just return the the index of the second parameter minus one (to take into account 0 index) of the array

function nthSmallest(arr, pos){
    let x = arr.sort((a, b) => a - b)
    return x[pos - 1]
  }