// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let times = sonYearsOld * 2
    return Math.abs(dadYearsOld - times)
  }

//   You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    return parseInt(inputString);
  }

//   When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

function switchItUp(number){
  
    switch (number){
      case(0):
      return "Zero";
      break;
        
      case(1):
      return "One";
      break;
        
      case(2):
      return "Two";
      break;
        
      case(3):
      return "Three";
      break;
        
      case(4):
      return "Four";
      break;
      
      case(5):
      return "Five";
      break;
      
      case(6):
      return "Six";
      break;
      
      case(7):
      return "Seven";
      break;
      
      case(8):
      return "Eight";
      break;
      
      case(9):
      return "Nine";
      break;
  }
  
  }
  