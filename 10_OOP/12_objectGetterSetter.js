// Object based Getter and Setter using Factory Function Object.create()

const User = {
  _email: "t@th.com",
  _password: "123",

  get email() {
    return this._email.toUpperCase();
  },
  set email(email) {
    this._email = email;
  },
  get password() {
    return `${this._password}abc`.toUpperCase();
  },
  set password(password) {
    this._password = password;
  },
};
const tanveer = Object.create(User);
console.log(tanveer.email);
console.log(tanveer.password);
