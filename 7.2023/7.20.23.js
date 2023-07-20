// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

//okay so we're taking in an array of ints only, non float, non negative.
//what we want to return is the same array but every other number is doubled
//doubleEveryOther([6,10,25, 60]) would return [6, 20, 25, 120]
//I think i'm going to create a new empty array first
//use map index
//conditional stating if a[i] modulus 2 === 0 push that number times 2
//otherwise push the same number
//return new arr
//i'm sure there's an easier way, but i just want the W

function doubleEveryOther(a) {
    let x = []
    a.map((item, index) => {
      if(index % 2 === 1){
        x.push(item * 2)
      } else {
        x.push(item)
      }
    })
    return x
    }