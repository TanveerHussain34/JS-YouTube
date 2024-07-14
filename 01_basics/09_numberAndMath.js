// // NUMBER

// let score = 30
// console.log(score)

// let balance = new Number(10000.8953761) // Explicitly declaring variable as a Number
// console.log(balance)

// console.log(balance.toString())

// console.log(balance.toString().length) // Additional methods due to toString()

// console.log(balance.toFixed(3))

// console.log(balance.toPrecision(1))

// console.log(balance.toLocaleString())
// console.log(balance.toLocaleString('en-IN')) // Specific syntax(India)

// MATH

// console.log(Math.abs(-4));
// console.log(Math.abs(4)); // Positive remains as it is

// console.log(Math.round(21.4));
// console.log(Math.ceil(21.1)); // Means even at .1 increase digit by 1
// console.log(Math.floor(21.9)); // Means even at .9 remain same digit

// console.log(Math.min(4, 3, 8, 5));
// console.log(Math.max(4, 3, 8, 5));

// console.log(Math.floor(Math.random() * 10 + 1)); // Random values between 1 and 10 if we are not given limits(1 to 6, 10 to 20)

let min = 1
let max = 6
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // Random values between 10 and 12 if we are given limits min and max