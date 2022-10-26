// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0

//p The way i understand it, the parameter in this function is the number of rows in the triangle, could be positive or negative
//r How many dots in total are in the given triangle, if n is 0 or less than zero, return 0
//e triangular(6) would return 21 (1+2+3+4+5+6)
//p I created a variable named sum with a value of zero
    //used a for loop with i starting at 0, i less than or equal to number being passed in, incrementor would be plus 1
    //add the sum plus the number incremented
    //return sum