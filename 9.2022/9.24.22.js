// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

//p a sting is being passed in
//r the result should be an alternating of uppercase and lowercase chars
//e ('boy') should return 'bOy'
//p I'm taking the string being passed in and splitting the characters using the split method
  //Then I'm mapping through the letters and saying that if the letter is uppercase
  //Then turn it lowercase
  //otherwise turn it uppercase
  //then use array method join
  String.prototype.toAlternatingCase = function () {
    return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
  }

//   You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
  
//   Let's look at a few examples:
  
//   array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//   array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

  const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

  // Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
  if (n < 13 && n > 0) {
    return n - 1
  } else if (n > 13) {
    return n - 2
  } else {
  return n
  }
}