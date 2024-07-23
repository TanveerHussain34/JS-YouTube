// MAP use to return value after some arithmatic operations

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.map((num) => num + 10);

// console.log(newNums);

newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 50);

// console.log(newNums);

// REDUCE we are using to sum the arr values here

let myValues = [1, 2, 3, 4, 5];
let initialValue = 0;

let newValues = myValues.reduce(function (accomulator, currentValue) {
  return accomulator + currentValue;
}, initialValue);

console.log(newValues);

// Example of REDUCE Method

newValues = myValues.reduce((acc, curVal) => acc + curVal, 0);

console.log(newValues);

// Another example of REDUCE Method

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 5999,
  },
  {
    itemName: "DSA Course",
    price: 6999,
  },
  {
    itemName: "Data Science Course",
    price: 7999,
  },
  {
    itemName: "React Course",
    price: 8999,
  },
  {
    itemName: "MERN Stack Course",
    price: 9999,
  },
];

const totalValues = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalValues);
