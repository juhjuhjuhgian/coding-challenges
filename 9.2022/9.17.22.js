// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }

//   Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    else if (exam > 75 && projects >= 5) return 90;
    else if (exam > 50 && projects >= 2) return 75;
    else return 0;
  }

//   Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){

let array = [];
  
for(let i = 0; i < string.length; i++){

if(string[i] === '5'){
array.push('S');
} else if(string[i] === '0'){
array.push('O');
} else if (string[i] === '1'){
array.push('I');
} else {
array.push(string[i]);
    }
}
return array.join("");
}