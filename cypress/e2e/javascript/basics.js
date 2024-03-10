console.log("Print");

var string = "string";
let string1 = "let string";
const string2 = "const string";

var number = 10;
var number1 = 20;
var boolean = true;

if(number > number1)
{
    // Something
}
else
{
    // Some Thing
}

//  if(!number) // does not !

/* Rules for Variable names:

Cannot start with a number
Cannot start with a special char
Cannot have pre-defined javascript keywords
Cannot have spaces

*/

let newString = "Something";
console.log(newString.charAt(0));
console.log(newString.length);

/////////////////////////////////

// Primitive Data Types

let stringType = "This is a string"; // String
let numberType = 25; // Number
let booleanType = true; // Boolean
let symbolType = Symbol("uniqueIdentifier"); // Symbol

// Data types that cannot contain value
let nullType = null; // Null
let undefinedType; // Undefined

// Objects
let arrayType = [1, 2, 3, 4, 5]; // Array
let stringArray = ["one", "two", "three"]; // String Array
let dateType = new Date(); // Date
