// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

//p what i'm taking in are two arrays, non negative, non float, array look like they'll always have at lease one value 
//r what i should be returning is a single array which provides all the numbers that are not included in the 'values list'
//e [1, 2, 3, 4], [2, 4] would return [1, 3]
//p i think i want to use the includes method and filter method stating filter item within the 
//iteger list is not within the values_list using the '!'

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(item => !values_list.includes(item))
  }