// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

//definitely could've refactored, but I'm okay with it.
function paul(x){
    let count = 0
    
    for(let i = 0; i <= x.length; i++){
      if(x[i] === 'kata'){
        count += 5
      } else if (x[i] === 'Petes kata'){
        count += 10
      } else if(x[i] === 'life'){
        count += 0
      } else if(x[i] === 'eating'){
        count += 1
      }
    }
      return count < 40 ? 'Super happy!' : count < 70 && count >= 40 ? 'Happy!' : count < 100 && count >= 70 ? 'Sad!' : 'Miserable!'
      }
      