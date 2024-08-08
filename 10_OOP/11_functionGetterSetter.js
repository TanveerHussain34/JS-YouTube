// Function based Getter and Setter using defineProperty

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return `${this._password}abc`.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const tanveer = new User("tanveer@gmail.com", "123");
console.log(tanveer.email);
console.log(tanveer.password);
