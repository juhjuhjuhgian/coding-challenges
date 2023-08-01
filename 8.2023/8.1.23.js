// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

//WRONG - i used map instead of filtering the item
// function wordSearch(query, seq){
//   let newArr = []
//   let x = query.toLowerCase()
//   let y = seq.map(item => item.toLowerCase())
//   for(let i = 0; i <= y.length; i++){
//     if(x.includes(y[i])){
//       newArr.push(y[i])
//     }
//   }
//   return newArr.lenth === 0 ? ['Empty'] : newArr
// }

function wordSearch(query, seq){
    query = query.toLowerCase()
    const arr = seq.filter(e => e.toLowerCase().includes(query))
    return arr.length ? arr : ['Empty']
  }