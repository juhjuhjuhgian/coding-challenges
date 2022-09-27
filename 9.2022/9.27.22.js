// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

function mouthSize(animal) {
    let x = animal.toLowerCase()
    return x === 'alligator' ? 'small' : 'wide'
  }

//   In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

//p the parameters being passed in here were two non-negative integers
//r an array of integers that multiplied the first number passed in by 1, 2, 3, 4 etc as long as the result did not go higher than the second number passed in 
//e findMultiples(4, 5) would return [4] as 4 times 1 would work, but 4 times 2 would be higher than 5
  //findMultiples(6, 18) would return [6, 12, 18]
//p I created an empty array stored in the variable arr
  //I then ran a for loop starting at 1, i being less than or equal to the parameter limit, and the incrementor adding 1 each loop.
  //within the for loop, i used a conditional, stating that if i times the first number passed in was less than or equal to the limit then push to the array the result of i times the first number passed in.

  function findMultiples(integer, limit) {
    let arr=[]
    for(let i=1;i<=limit;i++){
      if(i*integer<=limit) arr.push(i*integer)
    }
    return arr;
  }

//   Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive() {
  return 'gianc'.length
}