// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

//pretty easy one here. use split and filter method and use .length method
function filterLongWords(sentence, n) {
    let x = sentence.split(' ')
  
    return x.filter(item => item.length > n)
  }