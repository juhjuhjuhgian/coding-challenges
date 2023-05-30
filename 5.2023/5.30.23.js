// Let's build a calculator that can calculate the average for an arbitrary number of arguments.

// The test expects you to provide a Calculator object with an average method:

// Calculator.average()
// The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

// It expects Calculator.average(3,4,5) to return 4.

// what i'm taking in here is unknown number of parameters, all of which are integers, non-negative, no floats passed in
//what we want is number which is the sum of all the numbs passed in and divded by the total amount of integers
//average: function (2, 3, 4, 5) would return 3.5
//pass in spread operator x 
//create a variable and set it 0
//for loop i = 0, i < x.length; i++
//for each item passed in we're going to add one to total
// total = 0 ? then return 0
// reduce method adding all values that are passed in starting with 0
//divide sum by total (number of items passed in)

var Calculator = {
    average: function(...x) {
      let total = 0
      for (let i = 0; i < x.length; i++){
        total++
      }
     return total === 0 ? 0 :  x.reduce((a, b) => a + b,0) / total
    }
   };