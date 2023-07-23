// we are going to reverse a string while maintaining the spaces (if any) in their original place.

// For example:

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo". 
// -- However, there is a space at index 3, so the string becomes "edo cruo"

// solve("your code rocks") = "skco redo cruoy". 
// solve("codewars") = "srawedoc"
// More examples in the test cases. All input will be lower case letters and in some cases spaces.

//WRONG not even close on this one. needed to split without the space and stoe it in a var and then map through the str.
//then use the splice method.

// function solve(str){
//    return str.split(' ').reverse().join(' ').split(' ')
// }

function solve(str){
    var result = str.split(' ').join('').split('').reverse();
    str.split('').map((c, index) => {
      if(c===' ')
        result.splice(index, 0, ' ');
    });
    return result.join('');
 }