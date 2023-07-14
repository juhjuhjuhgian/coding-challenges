// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.

//so i'm taking in an array of ints, looks like non negative, no floats
//what i'm to return is a single int of all the numbers added and divided by the number of numbers
//scores[1,2,3] would return 3
//i'm thinking of using the Math.floor method along with reduce method and .length method to obtain the average, lets see how this goes.
//after trying math.floor, i googled and found math.round. That's the one.

function average(scores) {
    return Math.round(scores.reduce((a, b) => a + b) / scores.length)
    }