// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

//easy one with the map method, check the index to see if its even and make it uppercase. then join it. 
function spongeMeme(sentence) {
    sentence = sentence.split('')
  
     let x = sentence.map((item, index) => index % 2 === 0 ? item.toUpperCase() : item.toLowerCase())
     
     return x.join('')
  }