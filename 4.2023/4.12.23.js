// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let y = '0'
    for(let i = 0; i < array.length; i++){
      let string = array[i].toString()
      if(string.length > y.length){
        y = string
      }
    }
    return parseInt(y)
  }