// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


//what we're taking in is a string. from the tests it looks like the sting could include characters other than letters
//what we want to return is the same string, but if there are vowels capitalize them
// swap('gian') would return 'gIAn'
//i want to create a var called vowels and put 'aeiou' in it
//split the string and store it in a var
//newArr and store it in a var
//use a for loop iterating through the string
//conditional
//if use includes method and say if vowels includes x[i] then push to new arr x[i] to uppercase
//else push x[i]

function swap (string) {
    let x = string.split('')
    let newArr = []
    let vowels = 'aeiou'
    if(string === ''){
      return ''
    } else {
      for(let i = 0 ; i <= x.length; i++){
        if(vowels.includes(x[i])){
          newArr.push((x[i]).toUpperCase())
        } else {
          newArr.push(x[i])
        }
      }
    }
    return newArr.join('')
  }