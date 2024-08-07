// Passing current context using this
// We are using .call to hold the reference after the setUser has been removed from call stack after the execution

function setUserName(userName) {
  this.userName = userName;
  console.log("Called");
}

function createUser(userName, email, password) {
  setUserName.call(this, userName);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123");
console.log(chai);
