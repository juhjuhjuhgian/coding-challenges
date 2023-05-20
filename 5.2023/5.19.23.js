//P what's being taken in is an array, it could include different data types like integers, strings, booleans, null
//R what we want is the same array, just in reverse order.
//E reverse = function([3, 'yes', 2, 'no']) would return ['no', 2, 'yes', 3]
//P i thought to first create a new array to push the items to using the .push method. then i ran a for loop,
//saying that i equals the last item in the array (array.length - 1), then say that i is greater than or equal
//to 0; then decrement by 1. So then I would start at the end of the array and push each item to the new array.
//return the new array.

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

reverse = function(array) {
    let newArr = []
    for (let i = array.length -1; i >= 0; i-- ){
      newArr.push(array[i])
    }
    return newArr
  }