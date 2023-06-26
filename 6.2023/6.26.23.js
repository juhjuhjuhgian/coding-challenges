// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

//so what i'm taking in here is an integer, non float, non negative
//what i'm to return is "value is xxxxx" where x is a string length of 5 digits with the number being passed in included, if the number passed in is less than five digits then put in some zeros as placeholders
//solution(9999) would return 09999, solution (123) would return 00123
//okay so i'm thinking to turn the number in to a string using the String constructor, then splitting it and storing it in a var x
  //then use a while loop stating that while x.length is < 5 unshift method a 0 in the front, and increment
  //join x and return with template literal


//SOLUTION: i had to refactor as i was incrementing when i didn't need to as it wasn't an integer data type. once i removed then it worked.
function solution(value){
    let x = String(value).split('')
   
    while(x.length < 5){
     x.unshift('0')
    }
     return `Value is ${x.join('')}`
   }