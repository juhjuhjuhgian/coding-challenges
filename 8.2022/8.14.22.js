// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//P the parameter in this function would be the array that has any number of strings in the indexes
//R the result would be the first word in the 0 index after the array is alphabetized, each letter 
  //being separated by three "*"s
//E twoSorts(['cat', 'giraffe', 'fish']) would return 'c***a***t'
//P I'm first going to sort the array by using the array method sort.
  //Then I'm going to target the 0 index and split it using the method .split
  //Then join the letters back and inputting the three ***s inbetween each letter.

  function twoSort(s) {
    return s.sort()[0].split('').join('***')
    }