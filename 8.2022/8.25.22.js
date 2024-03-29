// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];

websites.push('codewars')

// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a, b) {
    return a.reduce((a, b)=> a + b**2, 0) > b.reduce((a, b) => a + b**3, 0) ? true : false
  }

//   Your task is to sum the differences between consecutive pairs in the array in descending order.

//   Example
//   [2, 1, 10]  -->  9
//   In descending order: [10, 2, 1]
  
//   Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

  function sumOfDifferences(arr) {
    let sorted = arr.sort((a, b) => b - a)
    let sum = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      sum += (arr[i] - arr[i + 1]);
    }
    return sum;
  }