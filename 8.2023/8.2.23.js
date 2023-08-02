// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

//WRONG i thought it'd be an easy one, but alas it was not.
// function sumNoDuplicates(numList) {
// let newArr = []
//     for(let i = 0; i < numList.length; i++){
//       if(newArr.includes(numList[i])){
//         newArr.splice(numList[i])
//       }
//     }
//   return newArr.reduce((a, b) => a + b, 0)
// }

const sumNoDuplicates = n => n.reduce((a,c)=> n.indexOf(c) === n.lastIndexOf(c) ? a + c : a, 0)
