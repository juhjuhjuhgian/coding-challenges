// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

function isAnagram (test, original) {
    let x = test.toLowerCase().split('').sort((a, b)=> a.localeCompare(b)).join('')
    let y = original.toLowerCase().split('').sort((a, b)=> a.localeCompare(b)).join('')
    
    return x === y ? true : false
    };