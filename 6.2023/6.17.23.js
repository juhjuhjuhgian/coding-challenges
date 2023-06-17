// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

//i'm taking in a string of words, some words are repeated
//what i'm to return is a string of the words, but taken out are the words that repeat
// removeDuplicateWords('cat dog dog turtle pet pet pet') would return 'cat dog turtle pet'
//what i would first do is store the string that is split using the split method in an array
//i would then create a new empty array and store that in a variable
//then i would for loop, x less than the length of x - 1
//conditional stating if the newArr does not include x[i] then push it to new arr
//join the array with a space.

function removeDuplicateWords (s) {
    let x = s.split(' ')
    let newArr = []
    
    for(let i = 0; i <= x.length - 1; i++){
      if(!newArr.includes(x[i])){
        newArr.push(x[i])
      }
    }
    return newArr.join(' ')
  }