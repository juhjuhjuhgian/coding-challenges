// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

return x === String(x) ? 'Error' : (x * 50) + 6;

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    return health < damage ? 0 : health - damage
  }

//   Find the sum of all multiples of n below m

//   Keep in Mind
//   n and m are natural numbers (positive integers)
//   m is excluded from the multiples
//   Examples
//   sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
//   sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
//   sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
//   sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
    if (n >= m) return "INVALID";
  
  let sum = 0;
    for (var i = n; i < m; i+=n) {
      sum += i;
    }
    return sum;
  }