// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]

function generateRange(min, max, step){
    let arr = [];
    for (let i=min; i<=max; i += step) {
      arr.push(i);
    }
    return arr;
  }

//   The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

//   39.99 becomes $39.99
  
//   The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
  
//   Examples:
  
//   3 needs to become $3.00
  
//   3.1 needs to become $3.10

  function formatMoney(amount){
    return '$' + Number(amount).toFixed(2)
  }
