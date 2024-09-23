let x = 10;
let y;
const z = 20; // even though we can't change this to a string, for example, it's not because javascript knows it should be a number

// with javascript being loosely typed, i can swap the type of value that x or y is holding onto and the interpreter will just kinda
// figure things out
x = "hello";
y = true;

// function convertNumberToString(num) {
//   return num.toString();
// }

// let numAsString = convertNumberToString(true);
