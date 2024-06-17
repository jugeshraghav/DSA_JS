//throttling is a perormance optimization technique used in JavaScript to control the number of times a function is called. The required function is called at regular intervals inspite of firing several events.

///
const button = document.getElementById("button");
const event_triggered = document.getElementById("event_triggered");
const function_called = document.getElementById("function_called");

//
let count = 0;
const clickHandler = () => {
  event_triggered.innerText = Number(event_triggered) || ++count;
};
let function_called_count = 0;
const getData = () => {
  function_called.innerText =
    Number(function_called) || ++function_called_count;
};

const throttle = (fn, delay) => {
  let last = 0;

  return function (...args) {
    clickHandler();
    let now = new Date().getTime();
    let diff = now - last;
    if (diff < delay) {
      console.log("diff is less than delay");
      return;
    }
    last = now;
    fn(...args);
  };
};

///

button.addEventListener("click", throttle(getData, 5000));
