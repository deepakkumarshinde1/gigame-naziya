// promises => aysnc

async function getDataFromServer() {
  let status = false;
  if (status === true) {
    // fulfilled
    return Promise.resolve("Got a data from server");
  } else {
    // rejected
    return Promise.reject("Got an Error");
  }
}
console.log("start");
getDataFromServer()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
console.log("end");

// Web api
// DOM
// promises
// setTimeout
// setInterval

// REST API Server
async function getData() {
  try {
    let url = `https://jsonplaceholder.typicode.com/users`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    alert(error.message);
  }
}

getData();
