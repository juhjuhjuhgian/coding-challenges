// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param){
    switch (param.toLowerCase()){
        case "jabroni":
          return "Patron Tequila"
          break;
        case "school counselor"	:
          return "Anything with Alcohol"
          break;
        case "programmer"	:
          return "Hipster Craft Beer"
          break;
        case "bike gang member"	:
          return "Moonshine"
          break;
        case "politician"	:
          return "Your tax dollars"
          break;
        case "rapper":
          return "Cristal"
          break;
        default:
          return "Beer"
    }
  }

//   Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

//   Examples (input -> output)
//   '! !'                 -> '! !'
//   '123456789'           -> ''
//   'This looks5 grea8t!' -> 'This looks great!'
//   Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


  //p a string is being passed in
//r the same string without any numbers
//e stringClean('hell0o') would return 'hello'
//p i used the split method, targeting each character
  //then i filtered out any character that was not a number by using the filter method and includes method with a bang symbol
  //join method

  
function stringClean(s){
    return s.split('').filter(x => !'1234567890'.includes(x)).join('')
  }

//   You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

//   As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
  
//   Example (Input --> Output)
  
//   "Hello World" --> "World Hello"
//   "Hi There." --> "There. Hi"

function reverse(string){
    return string.split(' ').reverse().join(' ');
  }