// Closure

function makeFunc() {
  let name = "Safari";
  function displayName() {
    console.log(name);
  }
  return displayName; // With the reference of the function displayName, it also returns the scope of the child function named displayName that is the scope of the parent function(lexical scope)
}
const myFunc = makeFunc();
myFunc();
