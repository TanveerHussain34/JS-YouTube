// Property added to String will be only available to all strings, property added to Array will be only available to all arrays, but property added to Object will be available to all strings, arrays and objects.

let myName = "Tanveer        ";
let myFavLang = "JavaScript     ";

// console.log(myName.trim().length); this will how we would have to call it again and again for each string
// console.log(myFavLang.trueLength()); // we wanna a property named .trueLength like .length that will display that "The true length of string is 5."

const nationalHeroes = ["Quaid-e-Azam", "Allama Iqbal"];

const heroPower = {
  Quaid: "Implementation",
  Iqbal: "Dream",
  getIqbalPower: function () {
    console.log(`Power of Allam Iqbal is ${this.Iqbal}`);
  },
};

Object.prototype.tanveer = function () {
  console.log(`Tanveer is present in all objects.`);
}; // this will be available to all objects as well as arrays and strings

heroPower.tanveer();
// nationalHeroes.tanveer();
// myFavLang.tanveer();

Array.prototype.heyTanveer = function () {
  console.log("Tanveer says Hello!");
}; // this will only be available to all the arrays but not to objects and strings and it works same with strings

nationalHeroes.heyTanveer();
// heroPower.heyTanveer();
// myName.heyTanveer();

// Prototypal Inheritence

const human = {
  isEmployee: false,
};

const employee = {
  isHuman: true,
};

const manager = {
  isWorker: false,
};

const supervisor = {
  isEmployee: true,
};

// Out-Dated Method
supervisor.__proto__ = employee;
manager.__proto__ = employee;
employee.__proto__ = human;

// Latest Method
Object.setPrototypeOf(supervisor, employee);
Object.setPrototypeOf(manager, employee);
Object.setPrototypeOf(employee, human);

// Adding trueLength property to String
String.prototype.trueLength = function () {
  console.log(`${this.trim()} called true length.`);
  console.log(`The true length of string is ${this.trim().length}`);
};

myName.trueLength();
myFavLang.trueLength();
