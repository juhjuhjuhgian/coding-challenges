// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
    let vowels = ['a', 'e', 'i', 'o', 'u','y']
    let y = []
  
   for(let i = 0; i <= word.length; i++){
     if(word.length === 0){
       return [] 
     } else if (vowels.indexOf(word[i])>= 0){
       y.push(i + 1)
     }
   }
    return y
  }
  
  