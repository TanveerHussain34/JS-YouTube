// IF ELSE
// if (condition) {
// } else {
// }

let score = 400;

if (score < 50) {
  console.log("Your score is less than 50");
} else if (score == 50) {
  console.log("Your score is 50");
} else {
  console.log("Your score is greater than 50");
} // multiple if else statement

if (true) console.log("This if will always work");

if (true)
  console.log("Without using {}, we executed two lines of code after if."),
    console.log(
      "But this is not a good practice because the code is totally unreadable!"
    );

// Logical operators

let isLoggedIn = true;
let loggedInFromGoogle = false;
let hasDebitCard = true;
let loggedInFromEmail = false;

if (isLoggedIn && hasDebitCard) {
  console.log("Allow the user to buy the course.");
} else {
  console.log("Don't allow the user to buy the course.");
} // Logical AND Operator

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("Welcome to the site.");
} else {
  console.log("Please login first");
} // Logical OR Operator