//parameterized
const sumOfFirstNnumbers = (n, sum) => {
  if (n === 0) {
    console.log(sum);
    return;
  }
  sumOfFirstNnumbers(n - 1, sum + n);
};
// sumOfFirstNnumbers(4, 0);

//functional---returns insted of printing
const sum = (n) => {
  if (n === 0) return 0;
  return n + sum(n - 1);
};
console.log(sum(4));
