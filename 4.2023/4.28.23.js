// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

//before
// function getSumOfDigits(integer) {
//   var sum = null;
//   var digits =  Math.floor(integer).toString();
//   for(var ix = 1; ix < digits.length; ix = sum + 1) {
//     sum =+ digits[ix + 1]);
//   }
//   return sum;
// }


//after
function getSumOfDigits(integer) {
  var sum = 0;
  var digits =  Math.floor(integer).toString().split('');
  return +digits.reduce((a, b) => +a + +b)
}