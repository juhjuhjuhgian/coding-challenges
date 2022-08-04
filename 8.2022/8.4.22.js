// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

function zeroFuel (distanceToPump, mpg, fuelLeft) {
  
    return distanceToPump / mpg <= fuelLeft ? true : false
  }
  
  //P distance to pump, miles per gallon, how much fuel is left in gallons 
  //R I should be returning true if I can make it to the pump with how much fuel I have left, false if not
  //E  zeroFuel(50, 25, 2) true, 
     //zeroFuel(75, 25, 1) false, 
  //P I'm going to use a conditional using a ternary operator which returns true if distanceToPump 
    //divided by mpg is less than or equal to fuelLeft, and false if anything else