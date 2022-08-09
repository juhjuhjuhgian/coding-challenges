// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
    //P I understand the only parameter in this function being passed in is a string
    //R The intended result is for each word to be separated as as an item in the array.
    //E function stringToArray('This is cool') would return (['This', 'is', 'cool'])
    //P I'm going to use the method .split to target each space in the string and make it its
      //own item in the array.
    return string.split(" ")
    
    }