// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified

//so what i'm taking in here is a string only which is a name
//what i'm to return is the nickname of that name in a string
  //if the string is less than four char's then return 'Error: Name too short'
  //if  3rd letter is consonant, return first three letters
  //if  3rd letter is vowel, return first four letters
//nicknameGenerator('Tom') would return 'Error: Name too short'
//nicknameGenerator(Carlton) would return 'Car'
//i think what i am eventtually going to use is a conditional
//i'm going to store the vowels in a variable called 'vowels'
//i'm going to use includes, slice, split, length, join method
//first i'll say if the sting that's split (in a new var called x)length is less than 4 return error
//then i'll say else if x[2] includes vowel then slice -4
//else slice -3
//join and return 

//SOLUTION: I got the slice values wrong, that would've returned the end of the name. I figured out i needed to use (0, 4) and (0, 3)
//also used ternary operator 
function nicknameGenerator(name){
    let vowels = 'aeiouAEIOU'
    let x = name.split('')
    
    return x.length < 4 ? 'Error: Name too short' : vowels.includes(x[2]) ? x.slice(0, 4).join('') : x.slice(0, 3).join('')
  }