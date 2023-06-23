// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

//what's being passed in is a number, can be negative, but not floated.
//what we're to return is the same number, just in revese, but if the number is negative, keep it negative
//reverseNumber(45) would return 54, reverseNumber -54 would return -45
//what i think i want to do here is use a conditional stating that if the number is less than 0 then 
  //turn the number into a string, split it, slice it from the 1 index going forward (to exclude the -), reverse it, then join it
  //then return -x
//otherwise, do the same thing without the slice and turn it into a number.

function reverseNumber(n) {
  
if (n < 0){
  let x = String(n).split('').slice(1).reverse().join('')
  return -x
} else {
  let x = String(n).split('').reverse().join('')
  return +x
}
}