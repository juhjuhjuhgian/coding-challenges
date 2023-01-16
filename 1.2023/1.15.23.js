// You have to write a function that describe Leo:

// function leo(oscar) {

// }
// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

function leo(oscar){
  if (oscar === 88){
    return "Leo finally won the oscar! Leo is happy"
    } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!"  
    } else if (oscar !== 96 && oscar !== 88 && oscar < 88){
    return "When will you give Leo an Oscar?"  
    } else if (oscar > 88){
    return "Leo got one already!" 
    } 
}

// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

function odds(values){
  return values.filter( item => item % 2 !== 0);
}