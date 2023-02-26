// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.


//P parameter is an array of non-negative integers
//R an integer, the sum of all numbers, adding the first to the next which is first squared prior to adding
//E sumSquares([2, 1, 3, 4]) would return 24 (2 + (1*1) + (3*3) + (4*4))
//P I'm using the reduce method which will go through each item in the array and add to the last number but not before squaring 

function sumSquares(array) {
  return array.reduce((a, b) => a + (b * b), 0 )
}