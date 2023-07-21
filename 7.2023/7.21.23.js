// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

//okay so i'm taking in a string of words, the words are separated by a space
//i'm to return the longest word. if there are multiple longest word, return the highest index
//longestWord('hey there paul') would return there, longestWord('a b') would return b
//i think i'm first going to use the split method
//then map method and use .length
//then from there i have to type it out to see it, brb!

//I changed it up and realized map wouldn't work because I had turned the strings in to ints.
//I decided to use split, sort, and then use the lengths of the strings
//returned the last item in the sorted array.

function longestWord(stringOfWords){
    let x = stringOfWords.split(' ').sort((a, b) => a.length - b.length)
     return x[x.length - 1]
  }