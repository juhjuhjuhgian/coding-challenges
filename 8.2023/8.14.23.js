// Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.

// Consider an Example :
// 10 could be expressed as the sum of 1 + 2 + 3 + 4 .
// Task
// Given Positive integer, N , return true if it could be expressed as a sum of two or more consecutive positive numbers , otherwise return false .

//i didn't get this one right away, but knew i had to use a while loop off the bat. then I realized i needed a conditional after that for the bool.
function consecutiveDucks(num) {
    while(num>2){
      if(num%2!=0)return true
      num=num/2;
    }
    return false
  }