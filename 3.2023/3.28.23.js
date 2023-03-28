// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

//P the only thing being passed in here is an array of integers, the array will be at least two digits
//R we should be returning an array of two items
//E twoOldestAges([1, 5, 23, 97]) would return [23, 97], twoOldestAges([97, 104, 0, 205, 84]) would return [104, 205]
//P i first would use the sort method and store it in a variable, sorting from smallest to largest
//  then i would return an array by using .length - 2 and .length 

function twoOldestAges(ages){
    let x = ages.sort((a, b) => a - b)
    
    return [x[x.length -2], x[x.length -1]]
    }
