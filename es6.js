class Human {
  constructor(name) {
    this.name = name;
  }

  running() {
    console.log(`${this.name} is running`);
  }

  walking() {}

  talking() {}
}

let human = new Human("Deepakkumar");

human.name;
human.running();

let human2 = new Human("Naziya");
human2.name;
human2.running();
console.clear();
// gen
function* loop(max) {
  let start = 1;
  while (start <= max) {
    if (start === max) {
      return start;
    }
    yield start;
    start++;
  }
}

let result = loop(3);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.clear();

let array = [10, 20, 30, 40, 50];
let iterator = array[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.clear();
function iterators(array) {
  let index = -1;
  let data = array;
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          if (index === array.length - 2) {
            index = -1;
          }
          index++;
          return { value: index, done: false };
        },
      };
    },
  };
}
console.clear();
let itr = iterators(array)[Symbol.iterator]();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
