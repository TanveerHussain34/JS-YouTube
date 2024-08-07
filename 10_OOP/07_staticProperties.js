class User {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`Username: ${this.userName.toUpperCase()}`);
  }
  static createId() {
    return `123`;
  }
}
const user = new User("Tanveer");
user.logMe();
// console.log(user.createId());

class Teacher extends User {
  constructor(userName, email) {
    super(userName);
    this.email = email;
  }
}

const teacher = new Teacher("Abid", "abid@gmail.com");
console.log(teacher.createId());
