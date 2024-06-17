// document.addEventListener("DOMContentLoaded", function () {
// const input = document.getElementById("searchInput");
// const getData = () => {
//   console.log("fetching data");
// };
// input.addEventListener("input", getData);
// })

const getData = () => {
  console.log("fetching data");
};

const debounce = (fn, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    let n = args[0];
    timer = setTimeout(() => {
      fn(n);
    }, d);
  };
};

const efficientGetData = debounce(getData, 800);
