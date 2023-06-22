// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

//i'm taking in a single integer, non negative, non float
//what i'm to return is the sum of the integer each time it is halved, and that total added up
//an example would be halvingSum(10) would return 10 + 5 + 2 + 1 = 18
//so from the example we can see that if the number isn't a whole number when divided by 2, then it is roudned down, so i will use math.floor to round down to nearest whole numb
//i will create a var called total and set it to 0
//i will use while loop, stating that while n >= 1, add n to total and also round n down after n divided by 2
//return total

function halvingSum(n) {
    let total = 0
    
    while(n >= 1){
      total += n
      n = Math.floor(n / 2)
    }
    return total
    }    