// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

// For example,

// ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// [7,70,17]

//not too bad with toString method and includes method.
const filterLucky = x => x.filter(a => a.toString().includes('7'));
