// create array
let array = [];
// add/update array => push (end) , unshift (start), splice (middle)
array.push("a");
array.unshift(100);
array.push({
  name: "John",
  age: 30,
});
// delete data => pop (end), shift (start), splice (anywhere)

// read array =>  forEach , some
// array.some((item, index) => {
//   console.log(item);
//   if (item === 100) {
//     return true;
//   }
// });
// re-create array =>  map
let array1 = [100, 200, 300, 400, 500];
let newArray = array1.map((value, index) => {
  return `<p class="text-red">${value}</p>`;
});
console.log(newArray.join(""));
let stringArray = JSON.stringify(array1);
console.log(JSON.parse(stringArray));

// search  => find, filter, includes
// find => number, string, object => one / undefined
let searchValue = array1.find((value, index) => {
  return value === 100;
});
// filter => number, string, object => [match] / []
let searchList = array1.filter((value, index) => {
  return value === 100;
});
// include => number , string => true / false
let isSearch = array1.includes(100);

// sort => sort
array.sort((a, b) => {
  return a < b ? -1 : 1;
});
// reverse => reverse
array.reverse();
// reduce => reduce
let finalResult = array.reduce((pValue, cValue) => {
  return pValue + cValue;
}, 0);
// array length => length
array.length;
// convert array to string => join
// convert array to preserve string => JSON.stringify
// convert preserve string to array => JSON.parse
// get a portion of array => slice
array.slice(2, 3);
