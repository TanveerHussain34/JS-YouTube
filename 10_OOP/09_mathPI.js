// We can't change the value of constants like PI due to the writable: false property and we can't even change it to true, however we can turn true to false and false to true on our own created objects

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const myObj = {
  name: "Tanveer",
  age: 23,
  qualification: "Undergraduate",
  takeAppointment: function () {
    console.log("Yes, available!");
  },
};

console.log(Object.getOwnPropertyDescriptor(myObj, "age"));

Object.defineProperty(myObj, "age", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(myObj, "age"));

console.log(myObj.age);
myObj.age = 24; // will not change
console.log(myObj.age); // 23 expected

for (const [key, value] of Object.entries(myObj)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  } // this will prevent to print the property of type function
} // will not iterate through just age property
