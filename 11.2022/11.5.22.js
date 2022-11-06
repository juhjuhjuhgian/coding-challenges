// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)

function minValue(values){
    let newArr = []
    values.map(item => {
    if(!newArr.includes(item)){
    newArr.push(item)    
    }
  })
    return Number(newArr.sort((a, b)=> a - b).join(''))
  }