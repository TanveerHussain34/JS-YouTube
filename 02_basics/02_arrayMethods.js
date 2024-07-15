let friends = ["Asad", "Asim"]
let best_friends = ["Aqib", "Junaid"]

friends.push(best_friends)

console.log(friends);
console.log(friends[2][0]); // first element from third element of friends array

let combined_arr = friends.concat(best_friends)

console.log(combined_arr)

// SPREAD OPERATOR(the easiest way to combine arrays)

let spread_arr = [...friends, ...best_friends] // We can concat more than two as well

console.log(spread_arr)

let complex_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

let normal_arr = complex_arr.flat(2) // Mention the levels(1, 2 or infinity) till to be flatted

console.log(normal_arr);

console.log(Array.isArray("Tanveer Hussain"))

console.log(Array.from("Tanveer Hussain")) // Making an array using given value if it is not

let options = {
        0: "Tanveer Hussain",
        1: "Junaid Akbar",
        2: "Aqib Munir",
        length: 3
    }

console.log(Array.from(options)) // Making an array using from an object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // Making an array using some values