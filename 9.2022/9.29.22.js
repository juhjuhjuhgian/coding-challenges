// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    let x = numbers[0]
    let y = numbers[numbers.length - 1]
    let z = []
    for(let i = x; i <= y; i++){
      z.push(i)
    }
      return z
    }