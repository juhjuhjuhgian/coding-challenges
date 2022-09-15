// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    let bSplit = beast.split('')
    let dSplit = dish.split('')
    
    return (bSplit[0] === dSplit[0]) && (bSplit[bSplit.length -1] === dSplit[dSplit.length -1]) ? true : false
    }

    // Factors are numbers you can multiply together to get another number.

    // 2 and 3 are factors of 6 because: 2 * 3 = 6
    
    // You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
    // You can use the mod operator (%) in most languages to check for a remainder
    // For example 2 is not a factor of 7 because: 7 % 2 = 1
    
    // Note: base is a non-negative number, factor is a positive number.

    function checkForFactor (base, factor) {
        return base % factor === 0;
      }