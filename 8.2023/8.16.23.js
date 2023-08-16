// You are given two arrays arr1 and arr2, where arr2 always contains integers.

// Write a function such that:

// For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] the function returns ['a', 'a']

// For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] the function returns [1, 1, 1]

// For arr1 = [0, 3, 4], arr2 = [2, 6] the function returns [4]

// For arr1=["a","b","c","d"] , arr2=[2,2,2], the function returns ["c","c","c"]

// For arr1=["a","b","c","d"], arr2=[3,0,2] the function returns ["d","a","c"]

// Note that when an element inside arr2 is greater than the index of the last element of arr1 no element of arr1 should be added to the resulting array. If either arr1 or arr2 is empty, you should return an empty arr (empty list in python, empty vector in c++). Note for c++ use std::vector arr1, arr2.


//WRONG i thought mine was very close but i couldn't firgure out one thing. in CW, i was onlt failing one test and passing everything else. I should've just used a nested loop.
// function findArray(arr1, arr2){
//     let newArr = []
    
//     arr1.map((item, index) => {
//       for(let i = 0; i <= arr2.length; i++){
//         if(arr2[i] === index)
//           newArr.push(item)
//       }
//     })
//     return newArr
//   }

function findArray(arr1, arr2){
    const newArr = []
    
   for(let i = 0; i < arr2.length; i++){
     for(let j = 0; j < arr1.length; j++){
        if(arr2[i] === j){
          newArr.push(arr1[j])
        }
     }
   }
   
    return newArr
  }