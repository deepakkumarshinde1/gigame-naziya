console.log("Hello");
console.log(text3);
// console.log(text2);
// after 2015 => ES6 => ECMA Script
let text; // loosely coupled programming language
text = "deepakkumar";

const text2 = 20;
// before 2015 => ES5
var text3 = 30;
var text3 = 40;

// hoisting

// var global scope & Function Scope variable
// let & const are block scope variables
if (true) {
  let text = 30;
  var text3 = 70;
}

function fun() {
  if (true) {
    var text = "hello";
  }
  console.log(text);
}
