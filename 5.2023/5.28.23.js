// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

//so what i'm taking in would be a string that has numbers and letters, might be special chars according to test cases
//what i'm to return is the sum of all the numbers within the string
//for example sumOfIntegersInString('fnoweinf23sldjfoi') would be 5
//what i first want to do is take the string and split it using the .split method
//then i want to use the method and filter out only numbers
//then i might want to split again (not sure here)
//then reduce method

//was kind of off. once i figured the filter method wouldn't work i tried using the includes method, but i had the order wrong
//not sure if i would have gotten the else conditional though, stating that if number !== '' or setting number to ''

function sumOfIntegersInString(s){
    let numbers = '1234567890'
    let sum = 0
    let number = ''
    
    for (let i = 0; i <= s.length; i++){
      if(numbers.includes(s[i])){
        number += s[i]
      } else {
        if(number !== ''){
          sum += +number
          number = ''
        }
      }
    }
      return sum
    }    