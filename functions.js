// are 1st citizen of javascript

fun();
function fun() {
  console.log("Hello");
}

// function are object in javascript
function fun(a, b, c) {}

fun(10, 20, 30);

// function we can also pass unlimited parameters
function fun1(...values) {
  // ...value => rest parameter
  // values is an array
}

fun1(1, 2, 3, 4, 5, 6, 7, 8);

fun1(1, "a", null, function () {}); // [1,'a',null, function(){}]

// default return of function is => undefined

function fun2() {}

let var1 = fun2(); // undefined

function fun3() {
  return "Hello";
}

let var2 = fun3(); // Hello

// function in javascript
// 1. function definition
// 2. function expression
// 3. function callback
// 4. function as arrow
// 5. Immediately Invoke function expression

// 1. function definition
function fun4() {}

// 2. function expression
let fun5 = function () {};
let fun7 = () => {};

// 3. function callback
function fun8(callback) {
  callback(10);
}

fun8((result) => {
  console.log("Fun9 ", result);
});

// 4. function as arrow
// 5. Immediately Invoke function expression
(function (ten) {
  console.log(ten);
})("deepak"); // run once

// Closures
function fun9() {
  let count = 0; // lexical scope variables

  function child() {
    console.log(++count);
  } // closures function

  function child1() {
    console.log(--count);
  } // closures function

  return {
    child,
    child1,
  };
}

let result10 = fun9();
result10.child();
result10.child();
result10.child1();
result10.child1();
result10.child();
result10.child();
