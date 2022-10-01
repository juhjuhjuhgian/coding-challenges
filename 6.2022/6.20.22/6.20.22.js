// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let rev = x.split('').reverse().join('').toLowerCase().toString()
   return x.toLowerCase() === rev ? true : false
  }