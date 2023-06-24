// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0

//what i'm taking in here is an array of numbers, could be floated, but doesn't say whether or not it can be negative.
//i'm returning the sum of all the even numbers in the array
//sumEvenNumbers([1,2,3,4,5,6,7,8,9]) would return 20, sumEvenNumbers([1,3,5,9]) would return 0
//first i'm going to create a new variable with the total = 0
//then i'll use a for loop through the array 
//then i'll use a conditional and within that conditional state that if x[i] modulo 2 === 0 then add it to total
//return total

function sumEvenNumbers(x) {
    let sum = 0
    
    for(let i = 0; i <= x.length; i++){
      if(x[i] % 2 === 0){
        sum += x[i]
      }
    }
    return sum
  }