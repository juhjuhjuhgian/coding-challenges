//P what is being passed in is an array of at least three numbers - pos, neg, zero, no floats.
//R a new array of the numbers that in comparison are higher than all the numbers to its right
//E arrayLeaders([1, 2, 3, 0]) would return [3] and arrayLeaders([1, 2, 3, 9, 4, 5, 1, 3]) would return [9, 5]
//P I think the easiest way to do this, but not the most optimal way would be to run a for loop, and within that loop run a nested loop
//then within that nested loop write a conditional that if that item is greater than all items to the right, push the item to a new array.
//return new array

//answer: i had to view solution.i intially tried a nested loop but pivoted to one loop and using the slice method, but i wasn't slicing correctly
//i was doing slice(numbers[i], numbers[numbers.length -1]), i like the solution using reduce which is clever, adding all the numbers to the right and checking to see if they're less than numbers[i]

function arrayLeaders(numbers){
    let newArr = []
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > numbers.slice(i + 1).reduce((a, b)=> a + b, 0)){
           newArr.push(numbers[i])
        }
    }
    return newArr
  }