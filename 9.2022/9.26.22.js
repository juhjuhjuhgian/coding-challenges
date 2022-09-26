// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

//p the only things being passed into a and b are booleans true or false
//r as long as a doesn't equal b its true
//e xor(true, false) would return true
    //xor(true, true) would return false
//p well after looking at the solutions I saw that mine was way too drawn out and could have been completed with a bang equal equal sign but I instead used a conditional stating that if a was false or b was false, or, if a was true and b was true return false
//I probably could have said else true but instead i wrote it out that if one was true and one was false and vice versa then return true.

function xor(a, b) {
    if ( (a === false && b === false) || (a === true && b === true) ) {
      return false;
    } else if ( (a === true && b === false) || (a === false && b === true) ) {
      return true;
    } 
  }

//   Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

//p an integer is being passed in 
//r the corresponding code on the chart
//e get_char(31) would return ""
  //get_char(51) would return "3"
//p I stored the chart in as an object and assigned it to a variable called Chars then returned Chars[c]

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

//p what is being passed in is a string, either empty or a name that may or may not be first letter uppercase, or nothing
//r what should be returned is "Hello," plus the name if one is given, if nothing then undefined, if empty then just "Hello, World"
//e hello(gian) would return "Hello, Gian!"
  //hello("") would return "Hello World!"
  //hello() would return undefined
//p I wasn't able to get this one without checking for the solution, but I was close as I was missing the substr method and charAt method. I was already using a conditional and template literal, but was unable to put it all together. Via ternary operator, If name was empty or nothing was passed in, return Hello Word, else (template literal) return Hello first letter to uppercase then remaining (via substr) to lowercase starting at character one.

function hello(name){
    return name === '' || name === 'undefined' ? 'Hello World!' : `Hello, ${name.charAt(0).toUpperCase()}${name.substr(1).toLowerCase()}!`
}