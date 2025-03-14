// debouncing & throttling
let input = document.querySelector("#input");

// debouncing => only once
function debounce(cb, limit = 500) {
  let resetDebounce = null;
  return function (event) {
    if (resetDebounce !== null) {
      clearTimeout(resetDebounce);
    }
    resetDebounce = setTimeout(() => {
      cb(event);
    }, limit);
  };
}
input.addEventListener(
  "keyup",
  debounce((event) => {
    console.log(input.value);
  }, 1000)
);
// throttling => in interval

function throttling(cb, limit = 500) {
  let interval = false;
  return function (event) {
    if (interval === false) {
      interval = true;
      setTimeout(() => {
        cb(event);
        interval = false;
      }, limit);
    }
  };
}

window.addEventListener(
  "scroll",
  throttling(() => {
    console.log("Scroll");
  }, 1000)
);
