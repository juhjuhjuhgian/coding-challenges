// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    //P I'm going to pass in two parameters here, both being arrays. It's understood that all items of
      //of the array are integers
    //R I'm wanting to return the sum off all the items in arr1 and arr 2
    //E arrayPlusArray([1, 2, 3], [4, 5, 6]) would return 21
    //P I'm going to use the reduce method twice and return the sum of both
    
    return (arr1.reduce((a, b)=> a + b)) + (arr2.reduce((a, b)=> a + b))
}