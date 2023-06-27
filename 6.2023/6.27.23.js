//WRONG
// class Person {
//     constructor(myName, yourName){
//       this.myName = myName
//       this.yourName = yourName
      
//     function greet(myName, yourName){
//     return `Hello ${yourName}, my name is ${myName}`
//   } 
// }
// }

//RIGHT
class Person {
    constructor(name) {
      this.name = name;
    }
    greet(name) {
      return `Hello ${name}, my name is ${this.name}`;
    }
  }