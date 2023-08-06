// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(arr) {
    let a = 0, b = 0, c = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'a') {
        a++;
      } else if (arr[i] === 'b') {
        b++;
      } else if (arr[i] === 'c') {
        c++;
      }
    }
    return (a == 2 || b == 2 || c == 2) && (a == 3 || b == 3 || c == 3);
  }