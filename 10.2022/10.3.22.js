// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

return x === String(x) ? 'Error' : (x * 50) + 6;

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    return health < damage ? 0 : health - damage
  }