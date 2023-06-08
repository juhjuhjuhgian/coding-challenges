// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

//i'm taking in a number, not float, non negative
//what i'm to return is a string "disarium" or 'not' based on whether the numbers as individuals, powered, add up to the number taken in 
//disariumNumber(23) would return 'not'
//what i first want to do is take apar tthe number by making it to a string, and splitting it
//i'm thinking use the reduce method and using a ternary operator as well.

//solution - i didn't take into consideration the powering was the index of the number, so i had to pivot and use a for loop. i still used a ternary and reduce method.

function disariumNumber(n){
    let x = String(n).split('')
    let newArr = []
    
    for(let i = 0; i < x.length; i++){
      newArr.push(x[i] ** (i + 1))
    }
    return n === newArr.reduce((a, b) => a + b) ? "Disarium !!" : "Not !!"
  }