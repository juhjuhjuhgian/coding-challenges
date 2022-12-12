// Your task is to write function factorial.

function factorial(n){
  let sum = 1
  if(n === 0){
    return 1
  } else {
    for(let i = 1; i<=n; i++){
      sum *= i
    }
  }
  return sum
}