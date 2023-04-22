// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

function solve(s){

    let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let b = 'abcdefghijklmnopqrstuvwxyz'
    let c = '1234567890'
    let up = 0
    let low = 0
    let num = 0
    let char = 0
    s = s.split('')
    for(let i = 0; i < s.length; i++){
    if(a.includes(s[i])){up++}
    if(b.includes(s[i])){low++}
    if(c.includes(s[i])){num++}
    if(!a.includes(s[i]) && !b.includes(s[i]) && !c.includes(s[i])){char++};
    }
      return [up, low, num, char]
}