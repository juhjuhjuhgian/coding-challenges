// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//p what is being passed in is an array and within the array are arrays of two integers, negative and non negative
//r the returned value should be an array of "Open" or "Senior" based on whether the nested array meets the requirement of being at least 55 and second integer being greater than 7
//e openOrSenior([[1, 2], [55, 8]]) would return ['open', 'senior']
//p what I thought to use was use the map method to go through each item in the array
    //Once mapping, I used a ternary operator stating that if item[0] in the array was at least 55 AND item[1] in the array was greater than 7 then return 'Senior', otherwise return 'Open'

function openOrSenior(data){
    return data.map(item => {
     return item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open'
    })
  }