// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends){
    return friends.filter(item => item.length === 4)
  }

//   Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//   The binary number returned should be a string.

  function addBinary(a,b){
    return (a+b).toString(2)
  }