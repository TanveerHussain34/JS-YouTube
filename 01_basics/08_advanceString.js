let userName = "Tanveer Hussain"
let age = 23

console.log("Name: " + userName + " Age: " + age) // Outdated method of using string

console.log(`My name is ${userName} and I'm ${age} years old.`) // New method of using string

let companyName = new String("Netsol is a brand.") // Another method of initializing a string

console.log(companyName)

console.log(companyName.length)

console.log(companyName.charAt(5))

console.log(companyName.indexOf('N'))

console.log(companyName.toUpperCase())

console.log(companyName.trim()) // Removes white spaces at start and end of a string

console.log(companyName.replace("-", " "))
console.log(companyName.replaceAll("-", " "))

console.log(companyName.substring(0, 6)) // Does not include the end index
console.log(companyName.substring(7, 12)) // Does not include the end index

console.log(companyName.split("")) // Serparates characters
console.log(companyName.split(" ")) // Serparates words
console.log(companyName.split(" ", 3)) // Serparates three words
console.log(companyName.split("-", 3)) // Serparates three words using given separator

console.log(companyName.slice(0, 6)) // Does not include the end index
console.log(companyName.slice(12, 18)) // Does not include the end index
console.log(companyName.slice(-6, -1)) // Does not include the end index
console.log(companyName.slice(-6, companyName.length)) // Does not include the end index(18) while . is at 17

console.log(companyName.includes("sol"))