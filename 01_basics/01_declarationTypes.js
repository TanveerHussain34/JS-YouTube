const score = 33
let userName = "Tanveer"
var age = 23

// score = 39 // TypeError: Assignment to constant variable

userName = "Hussain"
console.log(userName)

function randomFunction(){
    console.log(age)
}

/* Try to avoid using var because of its block and functional scope problems */