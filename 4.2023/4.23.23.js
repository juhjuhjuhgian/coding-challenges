// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){
    let vowels = 'aeiou'
    let newArr = []
    let arr = s.toLowerCase().split('')
    for(let i = 0; i < arr.length; i++){
      if(vowels.includes(arr[i])){
        newArr.push(1)
      } else {
        newArr.push(0)
      }
    }
   return newArr.join('')
  }