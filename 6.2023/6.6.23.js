// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

// Examples
// 7 ==> return "Balanced"
// Explanation:
// middle digit(s): 7
// sum of all digits to the left of the middle digit(s) -> 0
// sum of all digits to the right of the middle digit(s) -> 0
// 0 and 0 are equal, so it's balanced.

//what we're taking in is a int, non-negative, non float
//what we want to return is a string of "balanced or not balanced" depending on whether or not the numbers to the left of the middle number and numbers to the right of middle number added up equal each other.
// function balancedNum(121) would return balanced, function balancedNum(1211) would also return balanced
//what i first want to do is to turn the number to a string and split it and store that in a variable called x
//create two other variables called left and right and set them to 0
//then i would use a conditional stating if string.length === 1 then return balanced
//else 
//find the middle by saying if the length of x modulus 2 equals 0 then say

//WRONG ANSWER
// function balancedNum(number){
//     let x = String(number).split('')
//     let left = 0
//     let right = 0
//     let middle = x.length / 2
//     console.log(middle)
//     if(x.length === 1){
//       return 'Balanced'
//     } 
// }


//SOLUTION a couple of things i did wrong was first i set the left and right as ints not strings but i could have changed the type at some point later in the solution
//i had the 'balanced' correct but i turned the string into an array which shouldn't have. and i also had trouble with the slice method
//i knew i was going to use slice but i didn't know how to get the left and right of the middle.
//i think i would have gotten it after the left and right of middle. just reduce and check if equal
function balancedNum(number) {
    let numstr = number.toString();
    let leftside = "";
    let rightside = "";
    if (numstr.length/2 < 1 || numstr.length === 2) { 
      return "Balanced";
    }
    if (numstr.length % 2 === 0) {
      leftside = numstr.slice(0,numstr.length/2-1);
    } else {
      leftside = numstr.slice(0,numstr.length/2);
    }
    rightside = numstr.slice(numstr.length/2+1);
    
    let lefttotal = leftside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
    let righttotal = rightside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
    return (lefttotal === righttotal) ? "Balanced" : "Not Balanced";
  }