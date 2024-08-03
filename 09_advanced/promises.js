// Promise creation
// PromiseOne
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, network, crytography(encryption), file reading(can't read without the help of kernel)
  setTimeout(function () {
    console.log("Async Work Complete"); // This is the async task to be completed
    resolve(); // This will resolve the promise as we are connecting resolve with .then()
  }, 1000);
});

// Promise consumption
promiseOne.then(function () {
  console.log("PromiseOne Consumed");
});

// PromiseTwo
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async Task Two Consumed");
});

// PromiseThree
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      userName: "Tanveer Hussain",
      email: "maliktanveerhussain459@gmail.com",
    }); // Here we can also pass data(in shape of object) in resolve and receive in .then()
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// PromiseFour
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Tanveer Hussain", password: "123" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});

// Promise Four
promiseFour
  .then(function (user) {
    console.log(user);
    return user.userName;
  })
  .then(function (user_name) {
    // this is called chaining, that is used again and again
    console.log(user_name);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected.");
  });

// PromiseFive
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ langName: "JavaScript", password: "123" });
    } else {
      reject("ERROR: JS went wrong!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch error: ", error);
  }
}
getAllUsers();
