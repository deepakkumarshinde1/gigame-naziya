let obj = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

// deep and shallow
let newObj = JSON.parse(JSON.stringify(obj));
obj.address.geo.lat = 90;
let add = "address";
console.log(newObj[add]);

let keys = Object.keys(obj);
console.log(keys);
let value = Object.values(obj.address);
console.log(value);
let obj_1 = Object.entries(obj.address);
console.log(obj_1);

let m1 = {
  name: "deepak",
};

let m2 = {
  location: "nashik",
};

let m12 = {
  ...m1,
  ...m2,
};

console.log(m12);
console.log(Object.hasOwn(m12, "address"));
console.clear();
console.log(obj[Object.keys(obj)[0]]);
