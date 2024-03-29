// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

function  calculateAge(a, b) {
    let c = b - a
    let d = a - b
  if(a < b && c > 1){
    return `You are ${c} years old.`
  } else if (a < b && c === 1){
    return 'You are 1 year old.'
  } else if (a > b && d > 1){
    return `You will be born in ${d} years.`
  } else if (a > b && d === 1){
    return 'You will be born in 1 year.'
  } else if (a === b){
    return 'You were born this very year!'
  }
  
  }

//   Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b){
    if(a.length > b.length){
        return `${b}${a}${b}`;
    }else if(b.length > a.length){
        return `${a}${b}${a}`;
    }
}
