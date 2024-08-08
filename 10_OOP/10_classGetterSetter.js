// Class based Getter and Setter

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(email) {
    this._email = email;
  }
  get password() {
    return `${this._password}abc`.toUpperCase();
  }
  set password(password) {
    this._password = password;
  }
}
const tanveer = new User("tanveer@gmail.com", "123");
console.log(tanveer.email);
console.log(tanveer.password);
