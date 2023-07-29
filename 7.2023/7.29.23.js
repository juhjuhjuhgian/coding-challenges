// Write a function named numbers.

// function should return True if all parameters are of the Number type.

// The function should accept any number of parameters.

// Example usage:

// numbers(1, 4, 3, 2, 5); // true
// numbers(1, "a", 3); // false
// numbers(1, 3, NaN); // true

//WRONG oh boy, I knew I had to use every method and typeof operator but i couldn't figure out the syntax. i had it as a ternary at first but thought if i wrote it as a conditional i might be able to read it a little better. I realize now i had to use an arrow function and pass in an item for every and then use typeof. sigh.
// function numbers (...params){
//  if(typeof this.params !== Number || typeof params !== NaN){
//    return false
//  } else {
//    return true
// }
//   }

function numbers (...params){
    return params.every(item => typeof item === 'number' ? true : false)
   }