// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
// Notes
// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists .!alt
// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

//so what i'm taking in here is an array of numbers, could be neg or not, no floats
//what i'm to return is a new array of the same numbers, just sorted 
  //first even numbers ascending
  //followed by odd numbers decsending
//for example
  //menFromBoys([1,2,3,4]) would return [2, 4, 3, 1]
  //menFromBoys([26, 12, 13, 14]) would return [12, 14, 26, 13]
//i think what i first want to do is create two new vars named odd and even 
//then i'd use a for loop
//then use a conditional staing that i modulo 2 === 0 then push that number to even array, else push to odd arr
//use sort method for both even and odd array, sorting from low to high and vice versa
//return use concat method

//SOLUTION
//i had to struggle through it a bit because i didn't read all the directions and didn't take into consideration the negative numbers
//i missed that it could not have repeating numbers so i had to and the && to the modulo conditionals stating that if the even and odd arrays didn't include along with the modulo condtion
//i also had to use Math.abs to change the number to positive to use modulo correctly
function menFromBoys(arr){
    let even = []
    let odd = []
    let newArr = []
    
    for (let i = 0; i <= arr.length; i++){
      if(Math.abs(arr[i]) % 2 === 0 && !even.includes(arr[i])){
        even.push(arr[i])
      } else if (Math.abs(arr[i]) % 2 === 1 && !odd.includes(arr[i])) {
        odd.push(arr[i])
      }
    }
    let x = even.sort((a, b) => a - b) 
    let y = odd.sort((a, b) => b - a)
    
    return x.concat(y)
  }