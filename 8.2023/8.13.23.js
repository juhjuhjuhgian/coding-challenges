// In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

// solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
// solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.
// Input will be lowercase and uppercase letters only.

//WRONG
// function solve(st,a,b){
// let y = st.split('').pop()
// let x = st.split('').shift()
// st = st.split('').slice(a, b).reverse().join('')
//   return `${x}${st}${y}`
// }

//I think i had the right idea? I was playingn around with slice (a, b + 1)
function solve(st,a,b){
 const p = st.slice(a, b+1)
 const r = p.split('').reverse().join('')
 
 return st.replace(p, r)
}
  