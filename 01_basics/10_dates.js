// All About Dates in JavaScript

let myDate = new Date()

console.log(typeof myDate)

console.log(myDate);

console.log(myDate.getFullYear());

console.log(myDate.getDay()); // Starts from Sunday(0)

console.log(myDate.getHours());

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toTimeString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2012, 11, 12) // Month starts from 0
console.log(myCreatedDate.toDateString());

myCreatedDate = new Date(12-12-2012) // Month starts from 1
console.log(myCreatedDate.toDateString());

myCreatedDate = new Date(2023, 11, 12, 7, 37, 11) //YYYY-MM-DD-HOUR-MIN-SEC
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // Now both myTimeStamp and myCreatedDate can be compared because both are in milli seconds

console.log(Math.floor(Date.now()/1000)); // Converted to seconds

console.log(myDate.toLocaleString('default', options = {
    weekday: "narrow",
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric'
})) // Include at your own whatever you want