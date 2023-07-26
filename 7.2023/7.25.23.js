// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Notes:
// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

//WRONG i was close but messed up the sum += part and returning count - 1 (which i don't fully understand.)
// function minimumSteps(numbers, value){
// let x = numbers.sort((a, b) => a - b)
// let sum = 0
// let count = 0
//   for(let i = 0; i <= x.length; i++){
//     if(count < value){
//       sum += (x[i] + x[i + 1])
//       count++
//       x.splice(0, x[i])
//     }
//   }

//   return count
// }

function minimumSteps(numbers, value){
    //your code here
    let sorted = numbers.sort((a, b) => a -b);
    let count = 0;
    let now = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (now < value) {
        now += numbers[i];
        count++;
      }
    }
    
    return count - 1;
  }