// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
 let x = str.toLowerCase().split('')
 let consonants = 'bcdfghjklmnpqrstvwxyz'
 let count = 0
 
 for(let i = 0; i < x.length; i++){
   if(consonants.includes(x[i])){
     count++
   }
 }
  return count
}