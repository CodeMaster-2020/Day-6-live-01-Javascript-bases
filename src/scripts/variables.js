// var/let/const (DON’T BE BIASED: var is still a totally valid statement, and it ought be used even if let is fashionable)
// data types
// operators
// control structures
// loops
// scopes: local/global and what is a lexical scope
// hoisting
// return
// ; and ASI
// console.log()
// dot notation
// Obj api
// Array api
// functions syntax (we only need them to be able to make a function not to make a fancy one)

var name = "LeBron";

let surname = "James";

const player = name + surname;

// Primitive data types
var isValid = true;

var nothing = null;

var notDefined = undefined;

var name = "Michael Jeffrey Jordan";

var age = 57;

// Reference
var welcome = {
  en: "Hello",
  it: "Ciao",
  de: "Hallo",
  es: "Hola",
  pt: "Olà"
};

var copy = obj;

copy.it = "Oi";
console.log(welcome.pt); // Oi
console.log(copy.pt); // Oi

var fruits = [];

fruits.push("Apple");
fruits.push("Banana");
fruits.push("Melon");
fruits.push("Strawberry");

console.log(fruits);

fruits[2] = "Peach";

console.log(fruits);
