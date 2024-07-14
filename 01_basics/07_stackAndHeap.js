// Stack(All Primitive Data Types(Call by Value))

let myEmail = "maliktanveerhussain459@gmail.com"
let anotherEmail = myEmail // gives value of myEmail to anotherEmail
anotherEmail = "alialeeraza34@gmail.com" // overriding will not affect the myEmail

console.log(myEmail);

// Heap(All Non-Primitive Data Types(Call by Reference))

let userOne = {
    email: "maliktanveerhussain459@gmail.com"
}
let userTwo = userOne // gives reference of userOne to userTwo
userTwo.email = "alialeeraza34@gmail.com" // overriding will also change the value of userOne

console.log(userOne);