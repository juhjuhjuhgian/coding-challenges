// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//p What is being passed in is an integer, may be positive or negative, may be a floated value
//r The expected result is a boolean whether or not what is being passed in is even or not
//e testEven(2) should return true
  //testEven(-2) should return true
  //testEven(0.3) should return false
//p I'm going to use modulus and say that if what is being passed in divided by 2 === 0 then return true, if not, return false (ternary operator)

function testEven(n) {
    return n % 2 === 0 ? true : false
  }