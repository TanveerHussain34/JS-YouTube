// SWITCH

// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

let day = "Thu";

switch (day) {
  case "Mon":
    console.log("Today is Monday.");
    break;
  case "Tue":
    console.log("Today is Tuesday.");
    break;
  case "Wed":
    console.log("Today is Wednesday.");
    break;
  case "Thu":
    console.log("Today is Thursday.");
    break;
  case "Fri":
    console.log("Today is Friday.");
    break;
  case "Sat":
    console.log("Today is Saturday.");
    break;
  case "Sun":
    console.log("Today is Sunday.");
    break;
  default:
    console.log("Invalid input detected!");
    break;
}

day = 7;

switch (day) {
  case 1:
    console.log("Today is Monday.");
    break;
  case 2:
    console.log("Today is Tuesday.");
    break;
  case 3:
    console.log("Today is Wednesday.");
    break;
  case 4:
    console.log("Today is Thursday.");
    break;
  case 5:
    console.log("Today is Friday.");
    break;
  case 6:
    console.log("Today is Saturday.");
    break;
  case 7:
    console.log("Today is Sunday.");
    break;
  default:
    console.log("Invalid input detected!");
    break;
}

// Switch control flow matches the case and execute the code under that case and breaks the execution of remaining cases. If we don't write break in any of the cases, all cases will be executed except default case.