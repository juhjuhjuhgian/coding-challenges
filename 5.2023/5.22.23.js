// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

//p two numbers, non float. first number is the number we want to square
//second number is the number of times we want to square the first number
//r want to return an array? if second is negative or zero return an empty array
//e squares(2, 3) would return [2, 4, 16] sqaures(5, 3) would return [5, 25, 125]
//p i'm thinking I can use a for loop stating that while i <= n, push to a new array x to the second power x
//forgot the conditional stating that if second number is <= 0 then return empty array

//had to check the solutions. i was pushing x but my mistake was trying to push the already 'powered' 
//value instead of doing it below. I dont totally understand how you could push x to newArr and then
//'power' it, but that's all i was missing.

function squares(x, n) {
    let newArr = []
    
    if(n <= 0){
      return []
    } else {
      for(let i = 1; i <= n; i++){
      newArr.push(x)
        x *= x
    }
    }
      return newArr
    }