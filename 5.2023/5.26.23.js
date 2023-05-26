// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//i'm taking in an array. the array could be numbers or strings. numbers could be negative but will not be floats.
//I'm to return one number which is the sum of all numbers that are odd and cubed before adding together
//cubeOdd([1, 2, 3]) would return 28
//I'm going to create a variable and call it total
//I'm going to create a for loop going through each item in the array
//Then i'm going to use a conditional stating that if i is not a number return undefined
// otherwise take that number and cube it and add to total
//return total

function cubeOdd(arr) {
    let total = []
    
     for(let i = 0; i < arr.length; i++){
      if (isNaN(arr[i])) {
        return undefined
      } else if(arr[i] % 2 !== 0){
          total.push(arr[i] ** 3)
        }
    }
        return total.reduce((a, b) => a + b,0)
    }
    