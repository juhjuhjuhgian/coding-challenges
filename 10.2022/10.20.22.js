// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//p what is being passed into the function are two strings compromised of letters, repeating or not
//r the result should be a combination of one of each letter that occured from either string, alphabetized.
//e longest('aabbcccde', 'abcdef') would return 'abcdef'
//p So I had to solve this before writing out prep, but what I ended up doing was splitting the first string and combining it with the second using concat and split.
    //I then created a new arr
    //then ran a for loop stating that as long as the item in the array was not in newArr, put it in the new arr.
    //then i sorted the array and joined it. I had to google how to sort an array that wasn't numbers and found the localecompare.

function longest(s1, s2) {
    let comb = s1.split('').concat(s2.split(''))
    let newArr = []
    for(let i = 0; i <= comb.length; i++){
      if(!newArr.includes(comb[i])){
        newArr.push(comb[i])
      } else {
        null
      }
    }
    return newArr.sort((a, b) => a.localeCompare(b)).join("")
  }