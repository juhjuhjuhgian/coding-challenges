// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//p the parameter passed in is a string of x's and o's both upper and lowercase
//r a boolean, true if x is equal to o
//e XO((x, x, o, o)) would return true
    //XO((x, o, O)) would equal false
//p First I use the toLowerCase method to make all the chars lowercase
    //then I used the split method to separate each letter in the string into an array, stored both into a variable
    //I created two variables, x and o and gave them a value of 0
    //I then used the forEach method to go through the array and for each item check if the item was equal to x or o, and to add it to the total of its designated variable.
    // Lastly I used a ternary operator to check if x was equal to o

function XO(str) {
    let a = str.toLowerCase().split('') 
  
  let x = 0
  let o = 0
  
  a.forEach(item => item === 'o' ? o += 1 : item === 'x' ? x += 1 : null)
  
  return x === o ? true : false
  }