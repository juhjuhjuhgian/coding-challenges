// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {

    if(n < 1 || m < 1) {
      return 0
    } else if (n > 1 || m > 1){
      return n * m
    }
  }
  paperwork(0, 0)

//   This code does not execute properly. Try to figure out why.

function multiply(a, b){
    return(a * b)
  }
  
  multiply(1, 1)

//   Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

  function greet(name){
    return(`Hello, ${name} how are you doing today?`);
  }

//   Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    return str.toUpperCase();
  }

//   This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0){
      return number * 8
    } else {
      return number *9
    }
}