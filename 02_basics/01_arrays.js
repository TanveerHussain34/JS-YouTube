// ARRAYS

let myArr = [1, 2, 3, 4, 5, 6]
let myFriends = ["Junaid Akbar", "Junaid Razzaq", "Aqib", "Hashir"]
let newArr = [1, "Tanveer", 2, "Hussain", true] // Totally allowed in JS

let numbers = new Array(1, 2, 3, 4, 5, 6)

console.log(myArr, myFriends, newArr, numbers)
console.log(myArr[0], myFriends[3], newArr[2], numbers[1])

console.log(myArr.push(7))

console.log(myFriends.pop())

console.log(newArr.includes(true))

console.log(numbers.indexOf(6))

// Difference between SHIFT and UNSHIFT

console.log(myArr.shift(), myArr) // Returns the shifted element after shifting(removing an element from top and shifting the elements one place at their left) and change the actual array as well

console.log(myArr.unshift(1), myArr) // Returns the number of elements after unshifting(adding an element at top and shifting the elements one place at their right) and change the actual array as well

// Difference between SLICE and SPLICE

console.log(myArr.slice(1, 3), myArr) // Does not print the value of end index and does'nt change the actual array

console.log(myArr.splice(1, 3), myArr) // Prints the value of end index and also changes the actual array after removing the elements that has been spliced from the actual array