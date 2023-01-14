// You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything

// Note that for some languages, the function main is the entry point of the program.

// Here's how it will be tested:

//     Solution.main("parameter1","parameter2");

class Solution{
    static main() {
      console.log("Hello World!");
    }  
  }

//   Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function trueOrFalse(val){
    return val == false || val == 0 || val == -0 || val == null || val == undefined || val == NaN ? "false" : "true"
  }