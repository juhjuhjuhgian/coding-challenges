// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let sum = 0
    let split = str.split('')
     
    split.forEach((item, index)=> {
        vowels.includes(item) ? sum++ : sum
    })
     return sum
   }

//    Given a list of integers, determine whether the sum of its elements is odd or even.

//    Give your answer as a string matching "odd" or "even".
   
//    If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    let total = array.reduce((a, b)=> a + b, 0)
    
    if(array === []){
      return [0]
    } else if (total % 2 === 0){
      return 'even'
    } else {
      return 'odd'
    }
 }

 function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }