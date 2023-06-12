// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .

//okay so what i'm passing in is an integer, non negative, non float
//what i'm to return is a string 'automorphic' or 'not' based on whether or not the number passed in squared ends in the same number passed in
//for example automorphic(25) would return 'automorphic' because the last digit is 5, square it and you get 25 which was the original number passed in
//what i first want to do is take the number, turn it into a string, and split it and store it in variable x
//then i'm a little iffy, but i'm thinking store the last number of x in a new variable called lastNumSq using x[x.length -1] and square it, switch to number data type
//then store the number of digits in a variable and use that to slice the end of the array
//check if they match with a ternary

// function automorphic(n){
//   let x = String(n).split('')
//   let lastNumSq = Number(x[x.length - 1]) ** Number(x[x.length - 1])
//   console.log(lastNumSq)
// return Number(x.slice(-x[x.length])) === lastNumSq ? "Automorphic" : "Not!!"

// }

//SOLUTION //i definitely over complicated again. I didn't need to switch it to integer to check using conditional, could've left it as a string
//could've checked string length to squared number length and sliced it
function automorphic(n){
    let len = n.toString().length
    let num = (n * n).toString().slice(-len)
    return (n == num) ? 'Automorphic' : 'Not!!'
  }