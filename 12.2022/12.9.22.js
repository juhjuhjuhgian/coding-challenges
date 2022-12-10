//P the parameter is an array of integers, array is minimum of two values
//R the result should be the largest sum between any combination of two numbers in the array
//E largestPairSum ([1, 2, 3]) would return 5 (2+3), largestPairSum([10,20,8]) would return 30 (10 + 20)
//P i think i first want to use a for loop to go through each item in the array, i would also create a variable called sum and set it to 0
  //i would then use a conditional NEVERMIND

  //Used .sort method and stored in a variable, then added index 0 + index 1
  
  function largestPairSum (numbers) {
    let x = numbers.sort((a, b) => b-a)
    return x[0] + x[1]
    }
    