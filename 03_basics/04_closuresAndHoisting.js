function one() {
  let userName = "Tanveer Hussain";

  function two() {
    let course = "JavaScript";
    console.log(userName);
  }

  two();

  //   console.log(course); // Out of its scope
}

one();

if (true){
    let userName = "Ali Raza"
    
    if(true){
        let website = "mdn.com"
        console.log(userName + " " + website)
    }

    // console.log(website) // Out of scope
}

// console.log(userName) // Out of its scope

// ANOTHER SCOPE RELATED INTERESTING EXAMPLE

console.log(addOne(5)) // Will work fine

function addOne(num){
    return num+1
}

// console.log(addTwo(5)) // Will cause error

let  addTwo = function(num){
    return num+2
}

console.log(addTwo(5))