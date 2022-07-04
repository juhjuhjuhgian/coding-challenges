// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let strSplit = str.split('');
    let reverseArr = strSplit.reverse();
    let combineArr = reverseArr.join('')
    return combineArr
  }