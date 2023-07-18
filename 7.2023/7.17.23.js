// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

//what we're passing in is an array of integers - non negative, between 0-100, non floated
//what we're to return is a single integer, the missing number
//basically the array should have 99 numbers and the number we're returning is the missing one
//I think i'll first sort the array using sort and store that in a var
//then i'll say if arr[i] + 1 !== arr[i + 1] then return arr[i + 1]

//had to fix it to return x[i] + 1 NOT x[i + 1] and also had to factor in if 0 was missing. figured it out though

function missingNo(nums) {
    let x = nums.sort((a, b) => a - b)
    for(let i = 0; i <= x.length; i++){
      if(x[i + 1] !== x[i] + 1){
        return x[i] + 1
      } else if(!x.includes(0)){
        return 0
      }
    }
  }