// This code does not execute properly. Try to figure out why.
// Was missing 'return'
multiply = function (a, b) {
    return a * b;
  }

//   You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//P the parameter in this problem is an array. The array contains nothng, or names
//R If the array has or more names, what should be returned is the first two names plus the total amount of names minus 2. Anything less should list the names or "no ones likes this"
//E function likes(['bob', 'dylan', 'kyle']) would return 'bob, dylan and kyle like this'
//P I'm going to use a switch statement, with each case being the number of names in the array and returning the string to match it. The last case will be a default of anything more than three.

function likes(names){
    switch (names.length){
        case 0:
            'no one likes this'
            break;
        case 1:
            `${names[0]} likes this`
            break;
        case 2: 
            `${names[0]} and ${names[1]} like this`
            break;
        case 3:
            `${names[0]}, ${names[1]} and ${names[2]} like this`
            break;
        default:
            `${names[0]}, ${names[1]} and ${names.length -2} others like this.`
    }
}
