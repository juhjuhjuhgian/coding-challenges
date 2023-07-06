// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

//i'm taking in an array of integers, could be negative, could be floats
//i'm to return a single int, which is the sum of the numbers at the even index, mult by the last number in arr
//numbers[1, 2, 3, 4, 5, 6,] would return 54 (1 + 3 + 5) * 6
//create new var with total equaling 0
//map through arr, if index mod 2 === 0, add to total
//mult total by last item in arr

//i don't know why i didn't jsut use a forloop and increment by two. silly.
// function evenLast(numbers) {
//   let total = 0
  
//   numbers.map((item, index) => {
//     if(index % 2 === 0){
//       total += item
//       console.log(total)
//     }
//   })
//   return total * numbers[numbers.length - 1]
// }

function evenLast(numbers) {
    if (numbers.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 2) {
      sum += numbers[i];
    }
    return sum * numbers[numbers.length - 1];
  }