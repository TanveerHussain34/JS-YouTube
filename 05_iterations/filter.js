// FILTER user to return value after comparison

const languages = ["JavaScript", "PHP", "Python", "Ruby"];

languages.forEach((item) => {
  console.log(item);
});

const langs = languages.forEach((item) => {
  //   console.log(item);
  return item;
});
console.log(langs); // foreach does not return value for this purpose we use filter

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = myNums.filter((num) => num > 5);
console.log(newNums);

newNums = myNums.filter((num) => {
  return num > 5;
});
console.log(newNums); // filter return value

newNums = [];
myNums.forEach((num) => {
  if (num < 6) {
    newNums.push(num);
  }
});
console.log(newNums); // this is how we can return values using foreach loop

let books = [
  {
    title: "Book One",
    genre: "History",
    publish: 1995,
    edition: 2001,
  },
  {
    title: "Book Two",
    genre: "Literature",
    publish: 2000,
    edition: 2015,
  },
  {
    title: "Book Three",
    genre: "Fiction",
    publish: 2010,
    edition: 2016,
  },
  {
    title: "Book Four",
    genre: "Science",
    publish: 1975,
    edition: 1987,
  },
  {
    title: "Book Five",
    genre: "Fiction",
    publish: 2005,
    edition: 2008,
  },
];

const userBooks = books.filter((bk) => {
  return bk.genre === "Fiction" && bk.publish > 2005;
});
console.log(userBooks);
