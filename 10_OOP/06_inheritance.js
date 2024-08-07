class User {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`Username is ${this.userName.toUpperCase()}.`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.userName.toUpperCase()}.`);
  }
}

const user = new User("Tanveer");
user.logMe();

const teacher = new Teacher("Zohaib", "zohain@gmail.com", "456");
teacher.addCourse();

console.log(teacher === Teacher);
console.log(user instanceof User);
console.log(teacher instanceof Teacher);
console.log(teacher instanceof User); // due to inheritance teacher is also instance of User as well as Teacher
