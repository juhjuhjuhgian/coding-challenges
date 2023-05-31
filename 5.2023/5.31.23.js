// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

//taking in two parameters, first an object which holds key value pairs being name and value. names will always be strings, values will always be non negative, values will not be floats, boss will always be a string
// what we want to return is a string 'Get Out Now!'. Else return 'Nice Work Champ!' 
//outed({'tim': 3, 'carl': 5}) that would return 'get out now' 3 + 5 = 8 / 2 is less than or equal to 5
//create a var called total have that equal to zero
//create another var called counter, have that equal to zero
//for in loop
//if key === boss, then take that value mult by 2, add that to total and increment counter
//else add value of every other person to total
//take total divided by counter is <= 5 then return 'get out' else 'nice work'

function outed(meet, boss){
    let counter = 0
    let total = 0
    
    for(let x in meet){
      if(x === boss){
        total += (meet[x] *2)
        counter++
      } else {
        total += (meet[x])
        counter++
      }
    }
      return (total / counter) <= 5 ? 'Get Out Now!' :  'Nice Work Champ!'
    }