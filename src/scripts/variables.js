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
