//You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

//p so i'm taking in two arrays that have a number of strings of different lenghts. the strings will be letters only
//r what we want to return is one number which is the largest difference between the longest string in the first array and second array. if one or both arrays don't contain anything, return -1
//e mxdiflg(['a', 'vv'm 'aaa'], ['asd', 'asdads', 'aaaaaaa'])would return 6 
//p so first take care of the -1 using a conditional saying is there is no length to a1 or a2 using ! return -1
//next store the length of all the items in the array in two variables and use the map method, returning a new array with the lengths of each string
//then use Math.max, and the within a set of parenthesis and separated by a comma, find the max difference using the spread operator saying l1 -l2 and l2 - l1

function mxdiflg(a1, a2) {
    if(!a1.length || !a2.length) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
    }