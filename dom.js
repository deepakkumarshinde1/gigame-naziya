// DOM => Document Object Model
// DOCUMENT => HTML
// OBJECT => JS
// MODEL => TREE
// DOM is a tree like structure of all the elements in the HTML document.

let btn = document.querySelector("#btn");
let h1 = document.querySelector("#h1");
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");
let submit = document.querySelector("#submit");
let list = document.querySelector("#list");
let tbody = document.querySelector("#tbody");

let count = 0;
let interval = null;

btn.addEventListener("click", function () {
  if (interval === null) {
    interval = setInterval(function () {
      h1.innerHTML = ++count;
    }, 100);
    btn.innerHTML = "Stop";
    btn.style.backgroundColor = "red";
  } else {
    clearInterval(interval);
    interval = null;
    btn.innerHTML = "Resume";
    btn.style.backgroundColor = "green";
  }
});

// parent.addEventListener(
//   "click",
//   () => {
//     alert("parent is clicked");
//   },
//   true
// );

// child.addEventListener(
//   "click",
//   () => {
//     alert("child is clicked");
//   },
//   true
// );

parent.addEventListener("click", (event) => {
  alert("parent is clicked");
});

child.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("child is clicked");
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let validation = false;
  if (validation === false) {
    alert("there is error on page");
    return false;
  }
  console.log("hello");
});

// print a list
// array of objects of laptops
let laptops = [
  {
    brand: "Apple",
    price: 100000,
    model: "Macbook Pro",
  },
  {
    brand: "Dell",
    price: 80000,
    model: "Inspiron",
  },
  {
    brand: "HP",
    price: 70000,
    model: "Pavilion",
  },
  {
    brand: "Lenovo",
    price: 60000,
    model: "Thinkpad",
  },
  {
    brand: "Lenovo",
    price: 60000,
    model: "Thinkpad",
  },
  {
    brand: "Lenovo",
    price: 60000,
    model: "Thinkpad",
  },
  {
    brand: "Lenovo",
    price: 60000,
    model: "Thinkpad",
  },
];

function printList() {
  let _lis = laptops.map((laptop) => {
    return `<li>${laptop.brand}</li>`;
  });
  list.innerHTML = _lis.join("");

  let _tr = laptops.map((laptop, index) => {
    return `<tr>
      <td>${index + 1}</td>
      <td>${laptop.brand}</td>
      <td>${laptop.price}</td>
      <td>${laptop.model}</td>
      </tr>
      `;
  });
  list.innerHTML = _lis.join("");
  tbody.innerHTML = _tr.join("");
}

printList();

// class

class Human {
  name = "deepak";
  age = 33;

  printDetails() {
    (() => {
      console.log(this);
    })();
  }
}
let human = new Human();
human.printDetails();

let Employee = {
  name: "deepak",
  age: 33,
};

function printDetails() {
  console.log(this);
}

// printDetails();
