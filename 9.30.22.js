
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

//p what is being passed in are three non negative integers
//r we're trying to figure out how many bottles you can buy with the discount that you save from the normal price of the bottle
//e dutyFree(20, 50, 100) would return 10 since the discount is 50 and the normal price is 20, so 20 divided by half would be 10 and 10 goes into 100 (hol) 10 times
//p this one took me a while. I had to google a formula to change the disocunt parameter to a percentage. Once i found that i stored it in variable x. Then i returned the result of the number passed into hol divided by x, then rounded down to the nearest whole number.

function dutyFree(normPrice, discount, hol){
    let x = (discount / 100) * normPrice;
    return Math.floor(hol / x);
  }