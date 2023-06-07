// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)
// should return

// [5.0, 10.0, 15.0]
//so i'm taking in two numbers here, the first is how many numbers i should return, the second is the number i should be multiplying
//I want to return an array of numbers, the length should match m
//multiples(2, 3) would return [3, 6, 9]
//I first want to create a new arr called x and set it to []
//i think i then want to then use a while loop saying that while m is greater than 0 run a for loop and push the result of n * 1, n * 2, n * 3 etc

//INCORRECT i made this harder than it should've been. looking at the solution its very selfexplanitory. 
// function multiples(m, n){
//   let newArr = []
  
//   while(m > 0){
//     for(let i = 1 ; i < (n - (n / 2)); i++){
//       if(!(n*i).includes(newArr)){
//             newArr.push(n * i)
//             m--
//       }
//     }
//   }
//   return newArr
// }

function multiples(m, n){
    var arr=[];
    for (var i=1; i<=m; ++i)
      arr.push(n*i);
    return arr;
  }
  