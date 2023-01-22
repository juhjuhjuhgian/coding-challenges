// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    return parseInt(s.split('').filter(item => '0123456789'.includes(item)).join(''))
     
   }
   