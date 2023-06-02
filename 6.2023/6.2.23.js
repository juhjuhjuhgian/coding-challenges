// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.

//what were taking in here is an array of ints, no floats, no strs or anything. 
//what we want to return is a new array of each item in the array and the one right after, added, and averaged., if arr is 0 or 1 or null return []
// function averages([1, 2,3 , 4]) return [1.5, 2.5, 3.5]
//create a new arr that's empty
//if length of numbers is less than or equal to 1 or is null return []
//else run a for loop
//use the slice method, add the two values and divide by two, and push to new arr
//return new arr

//SOLUTION: I ended up not using the slice method and instead just using arr[i] + arr[i + 1]

function averages(numbers) {

    let newArr = []
    
    if(numbers <= 1){
      return []
    } else {
      for(let i = 0; i < numbers.length -1; i++){
      newArr.push((numbers[i] + numbers[i + 1]) / 2)
    }
    }
      return newArr
    }