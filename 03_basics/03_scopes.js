var num3 = 300;
let num1 = 100;

if (true) {
  let num1 = 10; // Has block scope and can't be accessed outside the block
  const num2 = 20; // Has block scope and can't be accessed outside the block
  var num3 = 30; // Has global scope that can cause bugs
  num3 = 40; // Has global scope that can cause bugs
  console.log("INNER :", num1);
}

console.log("OUTER :", num1);

console.log(num1);
// console.log(num2)
console.log(num3); // Instead priting outer, its printing inner at outside

for (let index = 0; index < array.length; index++) {
  const element = array[index];
} // In for loop, most of people use i variable if it is declared using var(have global scope) it will cause bugs

// Next we will learn the scope of nested blocks
