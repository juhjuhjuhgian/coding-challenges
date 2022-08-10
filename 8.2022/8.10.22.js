// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
    //P The parameter in this function would be the total number of monkeys, always a whole number,
      //always an integer
    //R I want to return every number up to the number passed into n, excluding zero
    //E monkeyCount(4) would return [1, 2, 3, 4]
      //monkeyCount(9) would return [1, 2, 3, 4, 5, 6, ,7, 8, 9]
    //I think I'm going to use a for loop, with i=n, i being less than n + 1, and incrementing 
      //plus one, every time the loop is ran the number gets pushed to the array using method .push()
      let newArr = []
      for(let i = 1; i < n + 1; i++){
        newArr.push(i)
       }
      return newArr
       }