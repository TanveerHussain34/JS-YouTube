// FOR EACH LOOP

// FOR EACH LOOP ON ARRAY

// const languages = ["JavaScript", "PHP", "Python", "Ruby"];

// languages.forEach(function (language) {
//   console.log(language);
// }); // callback function

// languages.forEach((language) => {
//   console.log(language);
// }); // arrow function

// languages.forEach((language, index, arr) => {
//     console.log(language, index, arr);
//   }); // callback arrow function also have access to indes and the complete array

// function printMe(language) {
//   console.log(language);
// }

// languages.forEach(printMe);

const languages = [
  {
    name: "JavaScript",
    type: "interpreted",
  },
  {
    name: "PHP",
    type: "interpreted",
  },
  {
    name: "Python",
    type: "interpreted",
  },
  {
    name: "Ruby",
    type: "interpreted",
  },
];

languages.forEach((language) => {
  console.log(language.name, language.type);
});
