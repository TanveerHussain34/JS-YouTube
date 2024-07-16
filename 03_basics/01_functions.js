// Introduction to Functions

function sayMyName(){
    console.log("T")
    console.log("a")
    console.log("n")
    console.log("v")
    console.log("e")
    console.log("e")
    console.log("r")
}

sayMyName() // sayMyName is reference of function and () is the execution of that function

function addTwoNumbers(num1, num2){
    // result  = num1 + num2
    // return result
    return num1 + num2
}

let result = addTwoNumbers(3, 6)
console.log("Result: ", result);

function loginUserMessage(userName){
    if(!userName){ // !userName means falsy username that includes false, undefined, null, "", NaN, 0, etc
        console.log("Please enter a user name")
    } else {
        console.log(`${userName} just logged in`)
    }
}

loginUserMessage()
loginUserMessage('Ali')