// Lexical Scoping
// All the child functions have access to the properties of their parent function.
// Like name is the property of init function but it is accessible inside the displayName function that is the child of init function.

function init() {
  let name = "Chrome";
  function displayName() {
    console.log(name); // lexical scope
  }
  displayName();
}
init();

// Another Example

function outer() {
  let userName = "Tanveer";
  function inner() {
    let secret = "sec123";
    console.log("INNER:", secret); // lexical scope
    console.log("INNER:", userName); // lexical scope
  }
  function innerTwo() {
    console.log("INNER TWO:", userName); // lexical scope
  }
  inner();
  innerTwo();
  //   console.log("OUTER:", secret); // out of scope
}
outer();
// console.log("TOO OUTER:", userName); // out of scope
