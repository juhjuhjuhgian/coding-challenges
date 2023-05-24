// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

//what i'm taking in is a string, no numbers just chars, no spaces.
//what i'm to return is also a string but separated by a space are two combinations of letters taken from the first string. the first combo will be letters that are even indexed, second combo are letters odd indexed.
//sortMyString('pets') would return 'pt es' -- sortMyString('orange') would return 'oag rne'
//what i first want to do here is split the array so that each letter is a string in a new array, and store it in x
//i'm thinking of creating two new arrays called even and odd and then run a for loop on x.
//within that for loop i'll run a conditional using the modulus stating that if x[i] % 2 === 0 then push to even array, else push to odd
//use template literal to return 

function sortMyString(S) {
    let x = S.split('')
    let even = []
    let odd = []
    
    for(let i = 0; i < x.length; i++){
      if(i % 2 === 0 ){
        even.push(x[i])
      } else {
        odd.push(x[i])
      }
    }
    return `${even.join('')} ${odd.join('')}`
  }