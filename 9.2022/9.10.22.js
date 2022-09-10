// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('!').join('');
  }
  

//   You are given two interior angles (in degrees) of a triangle.

//   Write a function to return the 3rd.
  
//   Note: only positive integers will be tested.

function otherAngle(a, b) {
    return a === b ? a : 180 - b - a
  }