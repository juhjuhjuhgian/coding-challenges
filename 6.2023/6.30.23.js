// The following code is not giving the expected results. Can you debug what the issue is?

// The following is an example of data that would be passed in to the function.

// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

// getNames(data) // should return ['Joe', 'Bill', 'Kate']


//BEFORE
// function getNames(data){
//     return data.map(function(item){item.name});
//   }

//AFTER
function getNames(data){
    return data.map(item => item.name);
  } 

//SECOND CHALLENGE

// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.

// Notes
// The first and/or last names are never null, but may be empty.

// Task
// Fix the bug so we can all go home early.

//BEFORE

// class Dinglemouse{

//     constructor( firstName, lastName ){
//     }
    
//     getFullName(){
//       return firstName+" "+lastName
//     }
    
//   }

//AFTER

// class Dinglemouse{
//     constructor( firstName, lastName ){
//       this.firstName = firstName
//       this.lastName = lastName
//     }
    
//     getFullName(){
//       return (`${this.firstName} ${this.lastName}`).trim()
//     }
//   }