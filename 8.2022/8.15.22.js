// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//P The two parameters in this function are going to be an array of numbers passed into "numbers"
  //and the number that is they are dividing by, passed into "divisor"
//R The result is a new array with the numbers in the array that are in fact divisible by 
  //"divisor"
//E divisibleby([2, 3, 4, 5, 6], 3) would return [3, 6]
//P I'm going to define a new array called newArr with empty brackets
  //I'm then going to use the array method .filter() for the numbers parameter and pass in element
  //I'm going to use say that if the number passed into the element mod 0 then return that number.

  function divisibleBy(numbers, divisor){
  
    return numbers.filter(b => b % divisor === 0 
   )}
   