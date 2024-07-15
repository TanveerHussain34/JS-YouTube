/* Object Literals and Constructor Object(Singleton) are two types of object declaration, here we will discuss Object Literals */

let mySym = Symbol("key1")

// let myObj = new Object() // This is Singleton type of declaration

let myObj = {
    firstName: "Tanveer",
    lastName: "Hussain",
    "age": 23, // Possible because the compiler considers keys as strings
    email: "maliktanveerhussain459@gmail.com",
    Location: "Raiwind",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "key1"
} // This is Object Literals type of declaration

console.log(myObj)
console.log(myObj.email)
console.log(myObj["Location"])
console.log(myObj[mySym]) // Accessing symbol from object

Object.freeze(myObj)
myObj.age = 23 // Will not work due to freeze()
console.log(myObj)

myObj.greeting = function(){
    return "Hello Mister, Welcome!"
}

myObj.greetingTwo = function(){
    return `Hello Mr. ${this.firstName} ${this.lastName}, Welcome!`
}

console.log(myObj.greeting())
console.log(myObj.greetingTwo())