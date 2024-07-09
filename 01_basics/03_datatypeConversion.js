"user strict";

let stringWithoutAlphabets = "2101313"
let valueInNumber = Number(stringWithoutAlphabets)
console.log(valueInNumber);
console.log(typeof valueInNumber);

// (input : "2101313")(datatype : string) => (value : 2101313)(datatype : number)

let stringWithAlphabets = "bsf2101313"
valueInNumber = Number(stringWithAlphabets)
console.log(valueInNumber);
console.log(typeof valueInNumber);

// (input : "bsf2101313")(datatype : string) => (value : NaN)(datatype : number)

let temperature = null
valueInNumber = Number(temperature)
console.log(valueInNumber);
console.log(typeof valueInNumber);

// (input : null)(datatype : object) => (value : 0)(datatype : number)

// Boolean to Number
let isLoggedIn = true
console.log(Number(isLoggedIn));

// Number to Boolean
isLoggedIn = 0
console.log(Boolean(isLoggedIn));

// String(empty) to Boolean
isLoggedIn = ""
console.log(Boolean(isLoggedIn));

// String to Boolean
isLoggedIn = "Tanveer"
console.log(Boolean(isLoggedIn));
