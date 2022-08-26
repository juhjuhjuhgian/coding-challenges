// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

//P the two parameters that are being passed in are arrays with three numbers larger than 0, not floated
//R the result should be one number which is the difference of the two arrays after the array items have been multiplied
//E findDifference([4, 5, 6], [1, 2, 3]) should return 114
  //findDifference([3, 1, 3], [1, 1, 1]) should return 8
//P I used the array method reduce twice, once for each array, and multiplied the first number by the next. I stored each total in a variable. Then I used a conditional to state that if one variable is larger than the other subtract that one from the other, otherwise switch it.

function findDifference(a, b) {
    let x =  a.reduce((a, b)=> a * b)
    let y =  b.reduce((c, d)=> c * d)
    
   return  x > y ? x - y : y - x
   }