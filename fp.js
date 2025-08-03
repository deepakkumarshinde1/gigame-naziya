// functional programming
// pure function
let t = 10;

function abc() {
  t = Math.random() * 1000;
}
function add(a, b) {
  return a + b;
}
add(10, 20);

// array => forEach(), map(), filter() , findIndex()

// hof
function xyz(cb) {
  cb();
  return function () {};
}
xyz(function () {});

// currying function
// static currying
function add(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}
add(10)(20)(30);
// dynamic curring
function add(a) {
  return function (b) {
    if (b !== undefined) {
      return add(a + b);
    } else {
      return a;
    }
  };
}

add(10)(20)(30)(40)();

// recursion
// factorial of number
// 3 => 3*2*1 => 6
function fact(n, i = 0) {
  if (i === 1 || n === 1) {
    return n;
  }
  if (i === 0) {
    i = n;
  }
  n = n * (i - 1); // 3 * 2 =>
  return fact(n, i - 1);
}

fact(2);

// n = 3 , i = 3
// n = 6 , i = 2
// n = 6 , i = 1

// (this) => call bind apply
// compassion

function multi(a, b) {
  return a * b;
}

function sub(a, b) {
  return a - b;
}

let composition = (f1, f2, v1, v2) => {
  return f1(f2(v1, v2), v2);
};
