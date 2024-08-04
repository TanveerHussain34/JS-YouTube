// JavaScript and Classes
// JavaScript does have classes since 2015 but it is not the Object Oriented Language like Java or C++. It is Prototype-based language.

// OOP
// Object is the collection of properties and methods for example, car is an object which has properties like color, model, and methods like start, stop, etc.

// Why OOP?
// OOP is used to create reusable code and to reduce the complexity of the code.

// Parts of OOP
// 1. Object Literal: Class is a blueprint for creating objects.
// 2. Constructor Function: Constructor Function is a function that is used to create objects.
// 3. Prototypes: Prototype is a property of an object that is shared among all the objects.
// 4. Classes: Classes are a template for creating objects.
// 4. Instances(new and this): Instance is an object that is created from a class.

// Pillars of OOP
// 3. Inheritance: Inheritance is a mechanism in which one object acquires all the properties and behaviors of a parent object.
// 4. Polymorphism: Polymorphism is a mechanism in which one task can be performed in different ways.
// 5. Encapsulation: Encapsulation is a mechanism in which the data is wrapped in a single unit.
// 6. Abstraction: Abstraction is a mechanism in which the complex data is hidden and only the necessary data is shown.

// Object Literal
const user = {
  userName: "Tanveer Hussain",
  loginCount: 8,
  isLoggedIn: true,
  logIn: function () {
    // console.log("User logged in");
    // console.log(userName + " is logged in");
    console.log(this.userName + " is logged in");
    console.log(this);
  },
};

// console.log(user.userName);
// user.logIn();
// console.log(this); // Empty Object({}) in case of Node Environment while Window Object in case of Browser Environment

const user2 = {
  userName: "Ali Raza",
  loginCount: 1,
  isLoggedIn: false,
  logIn: function () {
    console.log(this.userName + " is logged in");
  },
};

// console.log(user2.userName);
// user2.logIn();

// Now if we want to create multiple users then we have to create multiple objects like user and user2 which is not a good practice. So, we can use Constructor Function to create multiple objects.

// Constructor Function
// const promiseOne = new Promise()
// const data = new Date()
// Here new is a keyword that creates an object of a class.

function client(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.logIn = function () {
    console.log(this.userName + " is logged in");
  }; // this is also allowed but it is not a good practice because it will create a new function for each object.
  //   return this; // This is not necessary because it is automatically returned.
}

// const client1 = client("Tanveer Hussain", 8, true); // this will create an object of client class but it will be overrided by the last object.
// const client2 = client("Ali Raza", 1, false); // this object will override the previous object.
// console.log(client1);

const client1 = new client("Tanveer Hussain", 8, true);
const client2 = new client("Ali Raza", 1, false);

console.log(client1);
console.log(client2);

console.log(client1.constructor); // It will return the constructor function of the object.

console.log(client2 instanceof client);
