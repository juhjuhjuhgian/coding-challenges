// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

//p What is passed in is a string
//r the returned result should be "#"s replacing all but the last four characters of the string
  //if the string is empty return an empty string
  //if the string is less than or equal to 4 chars, return the four chars
//e maskify('This is nuts') would return 'This is'
  //maskify('abc') would return 'abc'
//p split the string using the split function and store it in an array
  //run a for loop stating as long as i is less than x.length -4, change that item to '#'
  //join the array and return it.

  function maskify(cc) {

    let x = cc.split('')
      
    for(let i = 0; i < x.length -4; i++){
      x[i] = '#'
    }
    x = x.join('')
      return x
    }
    