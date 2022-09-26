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