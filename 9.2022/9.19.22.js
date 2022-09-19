// Now you have to write a function that takes an argument and returns the square of it.

const square = (n) => n * n

function square( x ){
    return x * x;
  }

//   In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

//P the function is taking in two integers, whole numbers, non-negative
//R what we want is to take the first number and add it to sum the second, which is to be used twice
//E move(1, 2) should return 5
  //move(2, 3) should return 8
//P I'm returning position plus the sum of roll + roll

function move (position, roll) {
    return position + (roll + roll)
  }