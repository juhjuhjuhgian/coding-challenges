// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
  }

//   You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

//   Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
  
//   For example, when the input is green, output should be yellow.

function updateLight(current) {
    if(current === "green") {
      return "yellow";
    } else if(current === "yellow") {
        return "red";
    } else if(current === "red") {
        return "green";
    }
  }