// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

//P what i am getting passed in is a string of letters, looks to be all lowercase, and an array of numbers
//R what i am to return is the string minus the item in the string corresponding to the array item [0]. after each array item [0] is used it'll be 
//removed until there are none left and we are left with one letter in the string which should be returned
//E lastSurvivor('xyz', [0, 1]) would return 'y' because first the x would be removed leaving 'yz' then z would be removed
//P i think that first i need to split the string to an array using split method, and storing that in a variable. I initially thought i had to
//do a while loop and then a nested for loop inside that, but i had to look at the solution and see that a while loop wasn't necessary
//my other mistake was not specifying how many items to delete with the splice method. I did have .splice(coords[i]) but i was missing the ",1"
//simply return the string after that.


function lastSurvivor(letters, coords) {
    let x = letters.split('')
      for(let i = 0; i < coords.length; i++){
      x.splice(coords[i], 1)
      }
      return String(x)
    }
    