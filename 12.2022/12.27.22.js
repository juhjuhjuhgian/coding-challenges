// Variable assignment
// Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

//before
// var a == "dev"
// var b == "Lab"

// var name == a + b

//after
var a = "dev"
var b = "Lab"

var name = a + b

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
  return arr.includes(item) ? true : false
}