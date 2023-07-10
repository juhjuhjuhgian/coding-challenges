// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

//WRONG
// function solve(s){
// let x = 0123456789
// let y = s.split('')
// let count = ''
// let highest = ''

// for(let i = 0; i <= y.length; i+= 2){
//   if(x.includes(y[i])){
//     count + y[i]
//   }
//   if(+count > +highest){
//     highest.replaceAll(count)
//   }
// }
//   return +highest
// };

function solve(s){
    let arr = s.replace(/[^0-9/]/g, ' ').split(' ')
    return Math.max(...arr)
  }