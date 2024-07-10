let value = 3
let negValue = -value
console.log(negValue)

console.log(2 + 2);
console.log(6 - 2);
console.log(8 / 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(32 % 7);

let firstName = "Tanveer"
let lastName = "Hussain"
let fullName = firstName + " " + lastName
console.log(fullName);

console.log(1 + 1 + 1 + "1");
console.log(1 + 1 + "1" + 1);
console.log(1 + "1" + 1 + 1);
console.log("1" + 1 + 1 + 1);

/* Once concatenation detected a string it will consider all the numbers as string after that string and the numbers before the first string will be considered as numbers */

console.log((3 + 4) * 5 % 17);
console.log(3 + 4 * 5 % 17);

console.log(true);
console.log(+true);

console.log("");
console.log(+"");

// These are some behaviors of JavaScript to keep in mind while dealing it

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter
console.log(gameCounter);

/* Read the documentations for pre and post increments and for prefix and postfix expressions from mdn site */