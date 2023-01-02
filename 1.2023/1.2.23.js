//Your task is to find the nearest square number, nearest_sq(n), of a positive integer n. 

//you take the square root of the integer, round it to the nearest number, and then square that. That should give you the closest square number.

function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}