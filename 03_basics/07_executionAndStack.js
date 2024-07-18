let val1 = 10;
let val2 = 20;
function addTwo(num1, num2) {
  return num1 + num2;
}
console.log(addTwo(val1, val2));
console.log(addTwo(30, 40));

// Global Execution Context
// Execution context is an abstract concept that holds information about the environment within which the current code is being executed. It consists of two components:

// 1. Variable Environment: It is a data structure that holds identifier-variable mapping. It consists of two phases:
//    a. Memory Creation Phase: In this phase, the JavaScript engine creates a lexical environment for the current execution context.
//    b. Execution Phase: In this phase, the JavaScript engine executes the code line by line.

// Call/Execution Stack
// It is a data structure that holds information about the order in which the execution contexts are created and destroyed. It consists of two components:

//    a. Global Execution Context: It is the first execution context that is created when the JavaScript engine starts executing the code.
//    b. Function Execution Context: It is created whenever a function is invoked.

// Go the browser and open the source tab and create a js file inside the snippets tab and type the following code:

function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}
one();
two();
three();

// Now, add breakpoints and observe call stack. You will see the following output:

// three
// two
// one

// three
// two

// three