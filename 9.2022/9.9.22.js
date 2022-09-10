// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// // For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    if (month <= 3) 
    return 1
    else if (month > 3 && month <= 6) 
    return 2
    else if (month > 6 && month <= 9) 
    return 3
    else if (month > 9 && month <= 12) 
    return 4
    }
    
    // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

    // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
    
    // Mind the input validation.
    
    // Example
    // { 6, 2, 1, 8, 10 } => 16
    // { 1, 1, 11, 2, 3 } => 6
    // Input validation
    // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

    function sumArray(array) {
        if (array == null){
          return 0
        } else if (array.length <= 2){
          return 0
        } else {
         return  array.sort((a, b)=> a - b).slice(1, -1).reduce((a, b)=> a + b)
        }
       }