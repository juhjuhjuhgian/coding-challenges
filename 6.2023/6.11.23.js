// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// Number passed is always Positive .

// Return the result as String .

// The difference between ‘9’ and ‘0’ is not considered as 1 .

// All single digit numbers are considered as Jumping numbers.

// jumpingNumber(9) ==> return "Jumping!!"
// jumpingNumber(79) ==> return "Not!!"

//okay so what i'm passing in is an integer, non float, non negative.
//what i'm to return is a string of 'jumping' or 'not' if each number has a number(s) next to it that jumps by one. if number is single digit return 'not'
//jumpingNumber(4) returns 'not' jumpingNumber(2345) returns 'jumping'
//what i first want to do is create a variable and store the number turned into a string and split. also create a new arr called newArr
//then use a conditional stating if length is <= 1 then return not
//else run a for loop with i < x.length - 1 so the last digit doesn't check nothing since it's the last digit
  //in the for loop state that if x[i] + 1 === x[i + 1] then push it to newArr
//outside of for loop use ternary, if x.length === newArr.length then 'jumping' else 'not'

//WRONG
// function jumpingNumber(n){
//   let x = String(n).split('')
//   let newArr = []
  
//   for(let i = 0; i < x.length -1; i++){
//     if((x[i] + 1 === x[i + 1]) || (x[i] - 1 === x[i - 1])){
//         newArr.push(x[i])
//       } else {
//         (x.length === 1){
//         return 'Not!!'
//       }
// }
//     }
//       return x.length === newArr.length ? "Jumping!!" : "Not!!"
//     }

//SOLUTION i over complicated again, using a conditional when i didn't have to. 

function jumpingNumber(n){
    let arr = n.toString().split('')
    for(i=0; i < arr.length-1; i++){
      if(Math.abs(arr[i] - arr[i+1]) !== 1 ){
        return 'Not!!'
      }
    }
    return 'Jumping!!'
  }