// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

//before
// const solve = (x, y) => x // y

//after

const solve = (x, y) => x / y

// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {  
    let x = string.split('')
    
    while(x[x.length -1] === '!'){
      x.pop(x[x.length -1])
    }
    return x.join('')
  }