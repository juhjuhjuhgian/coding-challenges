// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

//WRONG I'm not used to regex. I tried using replace all but without being able to split it i knew it wouldn't work. i should've looked up regex to solve it, but now i get it.
// function calculate(str) {
// if(!str.includes('plus')){
//   return str.split('minus').split('').reduce((a, b) => a - b)
// } else if (!str.includes('minus')){
//   return str.split('plus').reduce((a, b) => a + b)
// }
// }

function calculate(str) {

    return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
  }