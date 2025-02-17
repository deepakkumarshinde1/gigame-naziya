// list
let user = ["a", "b", "c", "d"];
localStorage.setItem("users", JSON.stringify(user));

let list = localStorage.getItem("users");
list = JSON.parse(list);

let text = "Deepakkumar";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.split(""));

String.prototype.getValue = function () {
  let text = this.toString();
  return {
    len: text.length,
    uc: text.toUpperCase(),
    array: text.split(""),
  };
};
console.log(text.getValue());

// constructor function
function Human() {}

Human.prototype.name = "Deepak";
Human.prototype.printName = function () {
  console.log(this.name);
};

// inheritance
function Student() {
  this.age = 30;
}
Student.prototype = Object.create(Human.prototype);
Student.prototype.age = 30;

let student = new Student();
student.printName();

// class Human {
//   name = "Deeepak";
//   printName() {
//     console.log(this.name);
//   }
// }
