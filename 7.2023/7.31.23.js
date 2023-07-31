// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

//took me a minute, tried a for loop first then switched to map
function evenChars(string) {
    let x = string.split('')
    let newArr = []
    if(x.length < 2 || x.length > 100){
      return 'invalid string'
    } else {
      x.map((item, index) => {
        if(index % 2 === 1){
          newArr.push(item)
        }
      })
    }
      return newArr
    }