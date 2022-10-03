// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    let x = {
      a: 1,
      b:2,
      c:3,
      d:4,
      e:5,
      f:6,
      g:7,
      h:8,
      i:9,
      j:10,
      k:11,
      l:12,
      m:13,
      n:14,
      o:15,
      p:16,
      q:17,
      r:18,
      s:19,
      t:20,
      u:21,
      v:22,
      w:23,
      x:24,
      y:25,
      z:26,
    }
    for (const property in x) {
      return `Position of alphabet: ${x[letter]}`;
    }
      }

//       You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

function calculator(a,b,sign){

    if (sign == '+') {
      return a + b;
     } else if (sign == '-') {
       return a - b;
      } else if (sign == '/') {
      return a / b;
      } else if (sign == '*') {
      return a * b;
      } else {
      return "unknown value"
      }
  }