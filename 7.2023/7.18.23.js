// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

//so we're taking in an array of strings here
//what we want to return is an array of the same length, but the next item in the array takes the string from the previous index and adds the current string to it
//spacey[a, b, c] would retrun ['a', 'ab', 'abc']
//i'm thinking i create a new array thats empty first
//then use a for loop
//then push to the new array using template literal last item plus current item (don't know if this will work)
//i'm also thinking of using slice method? trying the first solution first

//WRONG instead of using template literals i should've just used the + 
// function spacey(array){
// let x = []
// for(let i = 0; i <= array.length; i++){
//   if(i === 0){
//     x.push(array[i])
//   } else {
//     x.push(`${array[i] -1}${array[i]}`)
//   }
// }
//   return x
// }

function spacey(array){
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      if(newArr.length < 1) {
        newArr.push(array[i])
      } else {
        newArr.push(newArr[i-1] + array[i])
      }
    }
    return newArr;
  }