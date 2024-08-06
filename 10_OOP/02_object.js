// Object
// Arrays, Strings and Functions can also be dealt like an Object

function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 5; // this is function but we are dealing it like an object, thats why we say functions are also objects

console.log(multiplyBy5(8));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// Since we are dealing functions like objects so we can explicitly declare and define functions of functions that can be directly accessed using "." operator. Suppose createUser is a constructor function is an object and we added two methods increment and printMe in its prototype.

// Constructor Function
function createUser(userName, price) {
  this.userName = userName;
  this.price = price;
}

// Prototype Method
createUser.prototype.increment = function () {
  this.price++;
  return this.price;
};

// Prototype Method
createUser.prototype.printMe = function () {
  console.log(`Price is ${this.price}`);
};

const user1 = new createUser("Chai", 250);
const user2 = new createUser("Code", 500);

user1.printMe();
user2.printMe();

user1.increment();
user2.increment();

user1.printMe();
user2.printMe();
