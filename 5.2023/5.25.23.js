// Find the last element of the given argument(s).

// Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4
// In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

//what's being taken in here would a string or an array or any number of arguments
//what we want to return would would be the last item of any of those taken in arguments
// function last([a, b, c]) would return c function last(4, 5, 6) would return 6
// i think i want to a conditional using the typeOf of method
//within that conditional i would say that if it's an array => array[array.length -1]
//if its a string => split method and repeat above
//if its a number arguments then i'm thinking to store them in a variable and use the spread operator?
//my wrong answer
// function last(...list){
// return typeof list.isArray || typeof list === 'string' ? list[list.length -1] : list.slice(-1)
// }
// i didn't know about the arguments object which makes this problem much easier. 

function last(list){
    let end = arguments[arguments.length -1]
    return end[list.length -1] || end
    }
    