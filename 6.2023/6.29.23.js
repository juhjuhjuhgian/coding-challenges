// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn

//what i'm passing in is a single integer, not floated, non negative
//what i'm to return is a string, of numbers, the number corresponds to the row, the number passed in is how many rows, and the number of the how is how many times the number shows up on the row
//pattern(3) should return "1\n22\n333" n\ being a new line in the string, pattern(0) would return ""
//so i think i'll use a conditional here first, saying that if n < 1 then return an empty string.
// else i think i'll run a for loop and state that while i is less than or equal to n, add the number repeated(using string method) to the output string


//WRONG i played around with using an array and using the join method but couldn't get it to work.
// function pattern(n){
//  var output=""
//  var x = []
//    if(n < 1){
//      return ""
//    } else if (n === 1){
//      return "1"
//    } else {
//      for(let i = 1; i <= n; i++){
//        output += `${String(i).repeat(i)}${'\n'}`
//      }
//    }
//  return output;
// }

const pattern = n => {
    let out=[];
    for (let i = 1; i <= n; i++){
      out.push(i.toString().repeat(i))
    }
    return out.join('\n');
   }