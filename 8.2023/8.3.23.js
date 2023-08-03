// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

function stringMerge(string1, string2, letter){
    let a = string1.split('').indexOf(letter)
    let b = string1.split('').slice(0, a)
    let c = string2.split('').indexOf(letter)
    let d = string2.split('').slice(c)
      return b.concat(d).join('')
    }