// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    let x = name.toLowerCase()
    return `Hello ${x[0].toUpperCase()}${x.substr(1)}!`
  };