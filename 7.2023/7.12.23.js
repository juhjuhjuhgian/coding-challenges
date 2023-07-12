// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

//WRONG very close!
// function absentVowel(x){
// let a = x.toLowerCase().split('')
// const vowels = {
//   a : 0,
//   e : 1,
//   i : 2,
//   o : 3,
//   u : 4
// }
// for (let i in vowels){
//   if(!a.includes(vowels[i])){
//     return vowels[i]
//   }
// }
// }

function absentVowel(x){
    let a = x.toLowerCase().split('')
    const vowels = {
      a : 0,
      e : 1,
      i : 2,
      o : 3,
      u : 4
    }
    for (let i in vowels){
      if(!a.includes(i)){
        return vowels[i]
      }
    }
    }