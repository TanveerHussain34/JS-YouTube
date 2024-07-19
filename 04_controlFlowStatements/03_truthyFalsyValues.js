// Falsy Values are False, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values are {}(empty object), [](empty array), "0", 'False' and all the other possible values

if (0n) {
    console.log("0n is a truthy value");
  } else {
    console.log("0n is a falsy value");
  } // verification of falsy value
  
  if ({}) {
    console.log("{} is a truthy value");
  } else {
    console.log("{} is a falsy value");
  } // verification of truthy value
  
  // Ternary Operator(?)
  
  let age = 17;
  console.log(age >= 18 ? "You can drive." : "You can't drive.");
  
  // Nullish coalescing operator(??) only works on null and undefined values
  
  let userName;
  userName = "Ali" ?? "Tanveer"; // will not work
  console.log(userName);
  userName = null ?? "Tanveer"; // will work
  console.log(userName);
  userName = undefined ?? "Hussain"; // will work
  console.log(userName);
  
  // checking whether an array is empty or not
  
  let arr = [];
  if (arr.length == 0) {
    console.log("Array is empty.");
  }
  
  // checking whether an object is empty or not
  
  let obj = {};
  if (Object.keys(obj).length == 0) {
    console.log("Object is empty.");
  }  