// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

//P an array of strings are being passed into the parameter of birds
//R what should be returned is the array without the geese provided in the variable geese
//E gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Mallard"] would return ["Mallard"']
//P I define a variable to hold the array method I'm going to use
  //I use the method filter and pass in the item, if the item in birds does not match any words
  //in the variable geese then add the word to noGeese
  //return noGeese

  function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let noGeese = birds.filter(word => !geese.includes(word))
    
    return noGeese
    // return an array containing all of the strings in the input array except those that match strings in geese
  };