// WHILE AND DO WHILE LOOPS

// WHILE LOOP

let i = 0;

while (i < 10) {
  console.log(`Value of i is ${i}`);
  i++;
}

let myArray = [
  "Quaid-e-Azam",
  "Allama Iqbal",
  "Muhammad Ali Johar",
  "Hafeez Jalandhari",
];

let j = 0;
while (j < myArray.length) {
  console.log(`Value of j is ${j} and value of array is ${myArray[j]}`);
  j = j + 1;
}

// DO WHILE LOOP

let score = 0;
// let score = 11;

do {
  console.log(`Value of score is ${score}`);
  score++;
} while (score < 10);
