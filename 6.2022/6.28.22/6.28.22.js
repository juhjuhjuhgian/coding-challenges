// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
    let newArray = []
    
    for(let i = 0; i < pin.length; i++){
      newArray.push(parseInt(pin[i]))
    }
    
    if(newArray.includes (NaN)) return false
    if(newArray.length < 4 || newArray.length > 6 || newArray.length === 5) return false
    
    return true
  }
  