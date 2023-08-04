// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.

//pretty easy one for me. turning n to a string then splitting it then turning each string in to an int, then using a ternary operator.
function lastDigit(n, d) {
    let x = String(n).split('').map(item => +item)
    return d > x.length ? x : d <= 0 ? [] : x.slice(-d)
  }