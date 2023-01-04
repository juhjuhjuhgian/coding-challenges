// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
//before
// function buildString(...template){
//     return `I like #{template.join(',')}!`;
//   }
function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

//   Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

  function isDigit(s) {
    return s==parseFloat(s);
   }