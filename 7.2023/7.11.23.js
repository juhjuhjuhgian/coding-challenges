// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

//i thought this one was pretty easy, just used template literals with substr methods and ternary operator. Oh and i also used the split method to compare the first and last letter of the string.
function bandNameGenerator(str) {
    let x = str.split('')
    
    return x[0] === x[x.length - 1] ? `${str[0].toUpperCase()}${str.substr(1)}${str.substr(1)}` : `The ${str[0].toUpperCase()}${str.substr(1)}`
  }