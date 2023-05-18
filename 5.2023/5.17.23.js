// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.


    //P what is being passed in is a string starting with c and ending in m with periods in between
    //R we want to return a string of 'caught' or 'escaped' if there are three or less periods
    //E catMouse('C....m') would return 'Escaped!' catMouse('C.m') would return 'Caught!'
    //P I think what i want to do here is split the string into the array using the split method and storing that in a variable
      //then return that if the length of the variable is less than or equal to five return 'Caught' else return 'Escaped'
function catMouse(x){
      let a = x.split('')
      return a.length <= 5 ? 'Caught!' : 'Escaped!'
    }