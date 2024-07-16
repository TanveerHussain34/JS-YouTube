// let tinderUser = new Object() // Singleton/Constructor Object declaration method

let tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Aariz"
tinderUser.email = "alialeeraza34@gmail.com"

console.log(tinderUser)

let regularUser = {
    id: "12ab",
    fullName: {
        userName: {
            firstName: "Tanveer",
            lastName: "Hussain"
        }
    }
}

console.log(regularUser.fullName.userName.lastName)

let obj1 = {a: 1, b: 2}
let obj2 = {c: 3, d: 4}
let obj3 = {e: 5, f: 6}

let obj4 = {obj1, obj2, obj3} // Wrong method
console.log(obj4)

let obj5 = Object.assign(obj1, obj2, obj3)
console.log(obj5)

let obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("email"))

let userObj = [
    {  
        id: 1,
        firstName: "Ali"
    },
    {  
        id: 2,
        firstName: "Raza"
    },
    {  
        id: 3,
        firstName: "Asim"
    }
]

console.log(userObj[1].firstName)