// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

function solve(s){
    let count = 0
    let highest = 0
   
    for(let i = 0; i < s.length; i++){
      if ('aeiou'.includes(s[i])){
        count++
        if(count > highest){
          highest = count
          }
        } else {
          count = 0
        }
       }
     return highest
     }