// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//what i'm passing in here is a number, non float, non negative.
//i'm return a string of the same numbers, but the ones that are two odd numbers in succession are separated by a dash
//I had to check the solution becuase i missed one step. i correctly turned the number to a string and split it
//i correctly used a for loop and a conditional stating that if arr[i] mod 2 === 0 and arr[i + 1] mod 2 === 0
//i incorrectly used splice when i should have just said arr[i] equals arr[i] + '-'
//i correctly used arr.join

function insertDash(num) {
    let x = String(num).split('')
    
    for(let i = 0; i <= x.length; i++){
      if((x[i] % 2 === 1) && (x[i + 1] % 2 === 1)){
        x[i] = x[i] + '-'
      }
    }
  return x.join('')
  }
  