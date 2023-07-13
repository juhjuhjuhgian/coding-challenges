// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

//WRONG should've just used a for loop and ternary like below
// function alternate(n, a, b){
//   let x = []
//   while(n > 0){
//     if(n % 2 === 1){
//       x.push(a)
//     } else {
//       x.push(b)
//     }
//     n--
//   }
//   return x
// }

function alternate(n, a, b){
    let x = []
    
    for(let i = 0; i < n; i++){
      x.push(i % 2 === 0 ? a : b)
    }
      return x
    }