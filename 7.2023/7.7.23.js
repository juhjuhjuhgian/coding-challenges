// Say hello!

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

// Example:

// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null

//pretty easy one here. passing in a string which is a name
//if name is empty or equals null return null otherwise return hello plus the name
//i used a ternary operator with the or and used a template literal

function greet(name) {
return name === "" || name === null ? null : `hello ${name}!`
}