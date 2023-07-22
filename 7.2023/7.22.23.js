// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr){
    let x = arr.sort((a, b) => a - b)
    return [x[0], x[x.length - 1]]
  };