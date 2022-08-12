// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//P The only item passed in to x would be an array of numbers and strings
//R The intended result would be the strings changed to numbers and the numbers to all be added 
  //together.
//E sumMix([1, 2, '3', '4']) would return the integer 10
  //sumMix([4, '2', 1, '7']) would return the integer 14
//P I first want to create a new array that would have all the numbers and strings as numbers. Then
  //using the forEach method, every string in the array would be changed to a number. Then, I would
  //return the sum of the numbers by using the reduce method, adding the previous total to the next 
  //number.

  function sumMix(x){
    let arrOfNumsX = []
    x.forEach(str => {
      arrOfNumsX.push(Number(str))
    })
    return arrOfNumsX.reduce((a, b)=> a + b)
  }