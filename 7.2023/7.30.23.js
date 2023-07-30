// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks
// Note:

// To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

function hydrate(s) {
    let x = s.split(' ')
    let nums = '0123456789'
    console.log(x)
    let count = 0
    
    for(let i = 0; i <= x.length; i++){
      if(nums.includes(x[i])){
        count += +(x[i])
      }
    }
    return count > 1 ? `${count} glasses of water` : `1 glass of water` 
  }