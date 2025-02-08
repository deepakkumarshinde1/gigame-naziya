// What is a event loop in javascript?
// Event loop is a mechanism that makes sure that the code runs in a non-blocking way and offloads the execution of code to other parts of the code when it is waiting for an API response or a timer to finish.
//  It is a single threaded loop that waits for the code to finish execution and then moves on to the next part of the code.
//  It is the backbone of the javascript runtime environment.

console.log("Start");

setTimeout(function () {
  let result = 10 + 20;
  console.log(result);
}, 0); // 1s == 1000ms

// setInterval(function () {
//   console.log("Interval");
// }, 1000);

console.log("End");

// Web apis => setTimeout, setInterval, fetch, ajax, DOM events , Promises, async await ect.

// Sync code runs 1st and then async code runs
