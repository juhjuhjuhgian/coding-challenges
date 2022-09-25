// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

//p a sting is being passed in
//r the result should be an alternating of uppercase and lowercase chars
//e ('boy') should return 'bOy'
//p I'm taking the string being passed in and splitting the characters using the split method
  //Then I'm mapping through the letters and saying that if the letter is uppercase
  //Then turn it lowercase
  //otherwise turn it uppercase
  //then use array method join
  String.prototype.toAlternatingCase = function () {
    return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
  }

