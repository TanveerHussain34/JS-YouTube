let user = {
    name: "Tanveer",
    price: 1999,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }
} // this operator works in objects

user.welcomeMessage()

user.name = "Ali"
user.welcomeMessage()

console.log(this); // Since we are working in node environment, the global object is {}(empty object) but when we work in browser's console the global object will be window object

// function randomFunction(){
//     let OS = "window"
//     console.log(this.OS) // this operator does not work in functions
// }

// randomFunction()

// let randomFunction = function(){
//     let OS = "window"
//     console.log(this.OS) // this operator does not work in functions
// }

// randomFunction()

let randomFunction = () => {
    let OS = "window"
    console.log(this.OS) // this operator does not work in functions
}

randomFunction()

// let addTwoValues = (num1, num2) => { // Explicit return(return will not work without using return keyword within {}
//     return num1 + num2
// }

// console.log(addTwoValues(3, 4))

// let addTwoValues = (num1, num2) => (num1 + num2) // Implicit return(return automatically without using return keyword not within {})

// console.log(addTwoValues(3, 4))

let addTwoValues = (num1, num2) => num1 + num2 // Implicit return(return automatically without using return keyword not within {})

console.log(addTwoValues(3, 4))

// let returnObject = () => {name: "Tanveer"} // Object can't be returned without using parenthesis

// console.log(returnObject())

let returnObject = () => ({name: "Tanveer"}) // Object can't be returned without using parenthesis

console.log(returnObject())