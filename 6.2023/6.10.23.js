//i'm taking in an array of strings only
//i'm to return the same array of strings but the first letter of each string is uppercase and everything else lowercase
//capMe(['paul, JOHN, GeOrge']) would return ['Paul', 'John', 'George']
//i think what i first want to do here is use the split method, splitting each name using the comma and maybe store that in a variable
//then i'm thinking to map through each name and use a conditional stating that if the first letter is lowercase then change to uppercase, other wise leave it.
//then i'm thinking use slice method and use tolowercase method for the rest of item
//join method

//SOLUTION: I didn't get it but my pseudocode was correct minus the conditional. I didn't think about using literal notation.

function capMe(names) {
    return names.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
  }