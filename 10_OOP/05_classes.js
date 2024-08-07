// class was introduced in ES6(2015)

// class User {
//   constructor(userName, email, password) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUserNameCase() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@fb.com", 123);

// console.log(chai.encryptPassword());
// console.log(chai.changeUserNameCase());

// Behind the scene

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUserNameCase = function () {
  return `${this.userName.toUpperCase()}`;
};

const tea = new User("tea", "tea@fb.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUserNameCase());
