// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

function explode(s) {
    let x = s.split('')
    let newArr = []
    for(let i = 0; i <= x.length; i++){
      if(x[i] > 0){
        newArr.push((x[i]).repeat(x[i]))
      }
    }
    return newArr.join('')
  }