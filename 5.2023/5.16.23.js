// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

//I did not get this one, but as I understand the solution, we are spreading the amount of objects passed in with the spread operator then combing them all using the reduce method and passing in a and b for previous and current object. Then we're saying for each property in the current object, if the property from the previous value is included in the previous value then take the two properties and add them, otherwise just take the current property 

const combine = (...params) => params.reduce((a, b) => {
    for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
    return a;
   }, {});