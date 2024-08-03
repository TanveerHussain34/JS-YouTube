// FETCH LIBRARY

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("Fetch error: ", error);
  });

// How actually Fetch works?
// In any previous tutorial, we talked about Global Context(Memory Heap and Call Stack(Global Context at the bottom and then functions)), Web API(setTimeout, setInterval and Fetch), Priority Queue and Task Queue etc.
// Actually Fetch is the only method that uses Priority Queue.
// Fetch have two main Breakpoints that are:

//                          WebBrowser/Node
//         Data---------       NetworkRequest                      Global
//  |--<--onfulfilled() <--   Approved(getResponse or Error)       Response<-----|
//  | |-<->onRejection() <--   Failed(request not sent)            Rejection<--| |
//  | |--------------->----------------->------------------>-------------------| |
//  |----------------->----------------->------------------>---------------------|
