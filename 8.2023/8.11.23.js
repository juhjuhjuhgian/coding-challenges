// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW

//this took longer than it should have...was initially trying to put join and to uppercase inside the map method and before that was using charAt method then remembered slice but then had to look at how to grab the first char. got it though.
function toAcronym(inp){
    let x = inp.split(' ')
    return x.map(item => item.slice(0, 1)).join('').toUpperCase()
   
   }