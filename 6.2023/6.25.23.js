// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

//I"m reciving two strings here. Strings may be empty, but not null.
//what i'm to return is basically one string in the order of shorter+reverse(longer)+shorter. if both strings are the same length then treat the first as the longer string
//shorter_reverse_longer('this', 'that') would return 'thatsihtthat'

//i think i have to use a conditional here
  //without reading too much into it i'm thinking of saying if a.length === b.length || a.length > b.length then use a template literal and also split reverse and join methods
  //otherwise if b split reverse join and then use a template literal  

  function shorter_reverse_longer(a,b){
    if(a.length === b.length || a.length > b.length){
      return `${b}${a.split('').reverse().join('')}${b}`
    } else {
      return `${a}${b.split('').reverse().join('')}${a}`
    }
  }