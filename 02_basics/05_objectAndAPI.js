// Object Destructuring

let course = {
    courseName: "JavaScript",
    coursePrice: 1999,
    courseInstructor: "Tanveer Hussain"
}

console.log(course.courseName); // Will work fine
// console.log(courseName); // Will cause error because we have not destructured the course object yet

let {courseInstructor} = course // Object Destructuring
let {courseInstructor: instructor} = course // Object Destructuring and giving new name to the key

console.log(courseInstructor);
console.log(instructor);

// JSON API Introduction
// API can be an object having keys as string and can also be an array of objects

// {
//     "name": "Tanveer",
//     "age": 23,
//     "email": "alialeeraza34@gmail.com"
// } // The syntax is absolutely fine

[
    {},
    {},
    {}
]

// Search for randomuser me api
// Copy the code of that api
// Try to understand that code if you can
// Otherwise go to JSON formatter and format and beautify that code
// Convert the code to the tree format for better understanding

// Random User API

// {
//     "results": [
//       {
//         "gender": "male",
//         "name": {
//           "title": "Mr",
//           "first": "Zaíro",
//           "last": "Almeida"
//         },
//         "location": {
//           "street": {
//             "number": 4969,
//             "name": "Rua São José "
//           },
//           "city": "São José",
//           "state": "Tocantins",
//           "country": "Brazil",
//           "postcode": 52327,
//           "coordinates": {
//             "latitude": "-80.3135",
//             "longitude": "-62.0990"
//           },
//           "timezone": {
//             "offset": "-2:00",
//             "description": "Mid-Atlantic"
//           }
//         },
//         "email": "zairo.almeida@example.com",
//         "login": {
//           "uuid": "f067cdf7-b9a5-4178-92dc-446368173633",
//           "username": "ticklishrabbit364",
//           "password": "birthday",
//           "salt": "TKPugCIt",
//           "md5": "6db36915a3e8b8fbb947b870d66cccfd",
//           "sha1": "4c859d894972890a8f54fc964b6850fa02f38260",
//           "sha256": "c491040b10212b0290152db66bcd00eb763b7614cce1c05e4431228177924e54"
//         },
//         "dob": {
//           "date": "1961-05-22T03:43:43.140Z",
//           "age": 63
//         },
//         "registered": {
//           "date": "2010-03-20T09:51:10.489Z",
//           "age": 14
//         },
//         "phone": "(45) 1424-2287",
//         "cell": "(79) 9383-4230",
//         "id": {
//           "name": "CPF",
//           "value": "605.774.276-96"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/23.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
//         },
//         "nat": "BR"
//       }
//     ],
//     "info": {
//       "seed": "6afebc0c2c67168c",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }