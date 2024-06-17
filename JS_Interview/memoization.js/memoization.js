const sum = (n) => {
  console.log("calculating sum");
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += n;
  }
  return sum;
};

const memoize = (fn) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    console.log(cache);
    if (cache[n]) return cache[n];
    //
    console.log("calculating result");
    let result = fn(n);
    cache[n] = result;
    return cache[n];
  };
};
const efficientSum = memoize(sum);
console.log(efficientSum(5));
console.log(efficientSum(5));
console.log(efficientSum(5));
console.log(efficientSum(5));
console.log(efficientSum(5));
// console.log(memoize(sum)(5)); // this creates a new memoize function every time we try to call it this way
