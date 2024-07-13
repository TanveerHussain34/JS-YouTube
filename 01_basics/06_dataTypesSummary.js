// Primitive DataTypes
// 7-DataTypes: Boolean, String, Number, Null, Undefined, Symbol, BigInt

let myNumber = 123
let yourNumber = 123.05

let myBigNumber = 112233n

let myString = "This is a string"

let myBoolean = true

let myUndefined

let myNull = null

let mySymbol = Symbol('abc')
let yourSymbol = Symbol('abc')

console.log(typeof myNumber);
console.log(typeof yourNumber);
console.log(typeof myBigNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof yourSymbol);

// Non Primitive DataTypes
// 3-DataTypes: Array, Object, Function

let myArray = ["Tanveer Hussain", "Junaid Razzaq", "Ali Shan"]

let myObject = {
    name: "Tanveer Hussain",
    age: 23,
    city: "Raiwind"
}

let myFunction = function(){
    console.log("JavaScript is Fun");
}

console.log(typeof myArray);
console.log(typeof myObject);
console.log(typeof myFunction);
