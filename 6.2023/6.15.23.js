// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

//what i'm taking in here is a string - length will always be > 0. no spaces. and i'm taking in a number that tells me how to split the string in even pieces
//what i want to return a new string that is the same string, not rearranged, just split and bunched in letters according to number being passed in
//splitInParts('gian', 2) would return 'gi an'
//what i want to first do is split the string and store it in a variable
//then maybe create a new var called arr and set it to empty brackets
//run a for loop and use the slice method and push to the new arr each sliced portion of the array

//WRONG - i didn't need it change the type here, could've just left as a string a sliced it that way. i did iniitally have the incrementor as i+= partLength but changed it
//not sure if i would've gotten the second part of the slice (partLength + i)
// var splitInParts = function(s, partLength){
//   let x = s.split('')
//   let arr = []
  
//   for (let i = 0; i < x.length; i++){
//     arr.push(x.slice(x[i], partLength ))
//   }
//   return arr.join(' ')
// }

var splitInParts = function(s, partLength) {
    let result = [];

    for (var i = 0; i < s.length; i += partLength) {
        result.push(s.slice(i, partLength + i));
    }
    return result.join(' ')
}