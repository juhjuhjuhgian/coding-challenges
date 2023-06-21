// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//okay so here i'm taking in an array of either ints or strings. the strings do not include special characters and need to be turned to numbers the ints are non negative and are not floated
//what i'm to return is the sum of the strings turned to ints, and the ints
//divCon([1, '2', 3]) would return 6
//this might be deceptively easy, but i'm thinking to use the map method and store the new array in a variable, then use the reduce method for the new variable 

//Misread the directions so my above logic does not work. I think i'll create two new variables and store the ints and strings in each
//run a for loop through the array and use the typeof method
//subtract string total from int total using reduce methods

function divCon(x){
    let intArr = []
    let strArr = []
    
    for(let i = 0; i <= x.length -1; i++){
      typeof x[i] === 'number' ? intArr.push(x[i]) : strArr.push(+(x[i]))
    }
      let intTotal = intArr.reduce((a, b) => a + b, 0)
      let strTotal = strArr.reduce((c, d) => c + d, 0)
    
    return intTotal - strTotal
    }