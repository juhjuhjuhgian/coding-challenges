// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0;
  }

//   We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

  //p what is being passed in to the parameter are positive integers or floats, or zero
//r I'm looking to find out if I need to use plural for a number thats provided
//e plural(20) returns true
  //plural(4) returns true
  //plural(0) returns true
//p I think i want to use a conditional? stating if number is 1 return false, else return true? lets try that first
function plural(n) {
    return n === 1 ? false : true
  }

//   Your goal is to return multiplication table for number that is always an integer from 1 to 10.

//   For example, a multiplication table (string) for number == 5 looks like below:
  
//   1 * 5 = 5
//   2 * 5 = 10
//   3 * 5 = 15
//   4 * 5 = 20
//   5 * 5 = 25
//   6 * 5 = 30
//   7 * 5 = 35
//   8 * 5 = 40
//   9 * 5 = 45
//   10 * 5 = 50
//   P. S. You can use \n in string to jump to the next line.

function multiTable(number) {
    return `1 * ${number} = ${1 * number}\n2 * ${number} = ${2 * number}\n3 * ${number} = ${3 * number}\n4 * ${number} = ${4 * number}\n5 * ${number} = ${5 * number}\n6 * ${number} = ${6 * number}\n7 * ${number} = ${7 * number}\n8 * ${number} = ${8 * number}\n9 * ${number} = ${9 * number}\n10 * ${number} = ${10 * number}`
    }